// This file is generated. Edit build/generate-style-code.ts, then run `npm run codegen`.
/* eslint-disable */

import styleSpec from '../../style-spec/reference/latest';

import {
    Properties,
    ColorRampProperty,
    DataDrivenProperty,
    DataConstantProperty
} from '../properties';


import type Color from '../../style-spec/util/color';
import type Formatted from '../../style-spec/expression/types/formatted';
import type ResolvedImage from '../../style-spec/expression/types/resolved_image';
import type {StylePropertySpecification} from '../../style-spec/style-spec';

export type LayoutProps = {
    "visibility": DataConstantProperty<"visible" | "none">;
};
let layout: Properties<LayoutProps>;
export const getLayoutProperties = (): Properties<LayoutProps> => layout || (layout = new Properties({
    "visibility": new DataConstantProperty(styleSpec["layout_pie-chart"]["visibility"]),
}));

export type PaintProps = {
    "pie-chart-mask": DataDrivenProperty<number>;
    "pie-chart-colors": DataConstantProperty<Array<string>>;
    "pie-chart-labels": DataConstantProperty<Array<string>>;
    "pie-chart-size": DataDrivenProperty<number>;
    "pie-chart-center-size": DataConstantProperty<number>;
    "pie-chart-stroke-color": DataConstantProperty<Color>;
    "pie-chart-stroke-width": DataConstantProperty<number>;
    "pie-chart-divider-width": DataConstantProperty<number>;
    "pie-chart-stroke-color-use-theme": DataDrivenProperty<string>;
};

let paint: Properties<PaintProps>;
export const getPaintProperties = (): Properties<PaintProps> => paint || (paint = new Properties({
    "pie-chart-mask": new DataDrivenProperty(styleSpec["paint_pie-chart"]["pie-chart-mask"]),
    "pie-chart-colors": new DataConstantProperty(styleSpec["paint_pie-chart"]["pie-chart-colors"]),
    "pie-chart-labels": new DataConstantProperty(styleSpec["paint_pie-chart"]["pie-chart-labels"]),
    "pie-chart-size": new DataDrivenProperty(styleSpec["paint_pie-chart"]["pie-chart-size"]),
    "pie-chart-center-size": new DataConstantProperty(styleSpec["paint_pie-chart"]["pie-chart-center-size"]),
    "pie-chart-stroke-color": new DataConstantProperty(styleSpec["paint_pie-chart"]["pie-chart-stroke-color"]),
    "pie-chart-stroke-width": new DataConstantProperty(styleSpec["paint_pie-chart"]["pie-chart-stroke-width"]),
    "pie-chart-divider-width": new DataConstantProperty(styleSpec["paint_pie-chart"]["pie-chart-divider-width"]),
    "pie-chart-stroke-color-use-theme": new DataDrivenProperty({"type":"string","default":"default","property-type":"data-driven"}),
}));
