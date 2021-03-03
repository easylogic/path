import UIElement, { EVENT } from "@core/UIElement";
import { LOAD } from "@core/Event";
import { Length } from "@unit/Length";
import RangeEditor from "./RangeEditor";


export default class GridGapEditor extends UIElement {

    components() {
        return {
            RangeEditor
        }
    }

    initState() {
        return {
            label: this.props.label,
            value: this.parseValue(this.props.value)
        }
    }

    setValue (value) {
        this.setState({
            list: this.parseValue(value)
        })
    }

    parseValue (value) {
        return Length.parse(value);
    }

    getValue () {
        return this.state.value
    }

    modifyData() {
        this.parent.trigger(this.props.onchange, this.props.key, this.getValue())
    }

    makeItem () {
        return /*html*/`
            <div class='item'>
                <div class='value'>
                    <span refClass="RangeEditor" 
                        label='${this.state.label}' 
                        ref='$value' 
                        key="value" 
                        value="${this.state.value}" 
                        units='px,em,%'
                        onchange="changeKeyValue" />
                </div>
            </div>
        `
    }

    [LOAD('$list')] () {
        return this.makeItem();
    }

    template () {
        return /*html*/`
            <div class='grid-gap-editor' ref='$body' >
                <div class='grid-gap-editor-item'>
                    <div ref='$list'></div>
                </div>
            </div>
        `
    }


    [EVENT('changeKeyValue')] (key, value) {

        this.state.value = value;

        this.modifyData();
    }
}