import { TooltipProps } from "recharts";

export interface CustomXAxisTickProps {
  tickProps: RechartsXAxisTick;
  record: any;
}

export interface RechartsXAxisTick {
  className: string;
  fill: string;
  height: number;
  index: number;
  orientation: string;
  payload: {
    coordinate: number;
    index: number;
    isShow: boolean;
    offset: number;
    tickCoord: number;
    value: string;
  };
  stroke: string;
  textAnchor: string;
  tickFormatter?: any; // You may want to replace 'any' with a specific type if applicable
  verticalAnchor: string;
  visibleTicksCount: number;
  width: number;
  x: number;
  y: number;
}

export interface CustomBarLabelProps {
  labelProps: RechartsBarLabel;
  dataKey: string;
}

export interface RechartsBarLabel {
  content: (props: any) => any;
  height: number;
  index: number;
  name: string;
  offset: number;
  parentViewBox?: any;
  textBreakAll?: any;
  value: string;
  viewBox: {
    height: number;
    width: number;
    x: number;
    y: number;
  };
  width: number;
  x: number;
  y: number;
}

export interface ImageSupportChartProps {
  data: any[];
}

export type CustomTooltipProps = TooltipProps<number, string> & {};
