import { CSS_TO_STRING } from "../util/functions/func";
import { editor } from "./editor";

export default {

  makeProjectStyle (item) {

    const keyframeString = item.toKeyframeString();
    const rootVariable = item.toRootVariableCSS()
    
    return `
      :root {
        ${CSS_TO_STRING(rootVariable)}
      }
      /* keyframe */
      ${keyframeString}
    `
  },

  makeStyle (item) {

    if (item.is('project')) {
      return this.makeProjectStyle(item);
    }

    const cssString = item.generateView(`[data-id='${item.id}']`)
    return `
    ${cssString}
    ` + item.layers.map(it => {
      return this.makeStyle(it);
    }).join('')
  },

  makeSvg (project) {
    const SVGString = project.toSVGString ? project.toSVGString() : ''
    return `
      ${SVGString ? `<svg width="0" height="0">${SVGString}</svg>` : ''}
    `
  },

  generate () {
    var project = editor.selection.currentProject;
    var artboard = editor.selection.currentArtboard;

    var css = `
      ${this.makeStyle(project)}
      ${this.makeStyle(artboard)}
    `
    var html = `
      ${artboard.html}
      ${this.makeSvg(project)}
    `
  
    return { html, css }
  }
}