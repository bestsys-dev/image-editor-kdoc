/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview LineDrawingMode class
 */
import DrawingMode from '../interface/drawingMode';
import {drawingModes, componentNames as components} from '../consts';

/**
 * LineDrawingMode class
 * @class
 * @ignore
 */
class LineDottedDrawingMode extends DrawingMode {
    constructor() {
        super(drawingModes.DOTTEDLINE_DRAWING);
    }

    /**
    * start this drawing mode
    * @param {Graphics} graphics - Graphics instance
    * @param {{width: ?number, color: ?string}} [options] - Brush width & color
    * @override
    */
    start(graphics, options) {
        const lineDrawing = graphics.getComponent(components.LINE_DOTTED);
        options['strokeDashArray'] = [20];
        lineDrawing.start(options);
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */
    end(graphics) {
        const lineDrawing = graphics.getComponent(components.LINE_DOTTED);
        lineDrawing.end();
    }
}

export default LineDottedDrawingMode;
