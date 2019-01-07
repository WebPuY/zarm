import React, { PureComponent, CSSProperties } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  ViewStyle,
} from 'react-native';
import PropsType from './PropsType';
import sliderStyle from './style/index.native';

export interface SliderProps extends PropsType {
  style?: CSSProperties;
  styles?: typeof sliderStyle;
}

const sliderStyles = StyleSheet.create<any>(sliderStyle);

export default class ZSlider extends PureComponent<SliderProps, any> {
  static defaultProps = {
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    styles: sliderStyles,
  };

  private slider;
  private panResponder;
  private offsetStart: number = 0;

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || 0, // tooltip显示的值
      offset: 0, // 按钮的位移量
      isVisible: false,
    };
  }

  componentWillMount () {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this.handlePanResponderStart,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderEnd: this.onPanResponderEnd,
    });
  }

  init = () => {
    const { value } = this.state;
    if (value !== 0) {
      const offset = this.getOffsetByValue(value);
      this.setState({ offset });
    }
  }

  onChangeValue = (value) => {
    this.setState({
      value,
      isVisible: true,
    });
  }

  /**
   * 计算tooltip的位置
   */
  locatedTooltip = () => {
    const { value, isVisible } = this.state;
    const { styles } = this.props;

    const offsetValue = this.getOffsetByValue(value);

    const sliderTooltipBox = [
      styles!.tooltipBox,
    ] as ViewStyle;
    const sliderTooltip = [
      styles!.tooltipContent,
    ] as ViewStyle;
    const sliderTriangle = [
      styles!.tooltipTriangle,
    ] as ViewStyle;
    const sliderText = [
      styles!.tooltipText,
    ];

    let component;

    if (isVisible) {
      component = (
        <View style={[sliderTooltipBox, { left: offsetValue }]}>
          <View style={sliderTooltip}>
            <Text style={sliderText}>
              {parseInt(value, 10)}
            </Text>
          </View>
          <View >
            <View style={sliderTriangle} />
          </View>
        </View>
      );
    }
    return component;
  }

  /**
   * 获取偏移量
   */
  getOffsetByValue = (value) => {
    const { min, max } = this.props;
    const result = this.slider * ((value - min) / (max - min));
    return result;
  }

  /**
   * 通过偏移量确定值
   * @param  {number} offset 偏移量
   * @return {number}        值
   */
  getValueByOffset = (offset) => {
    const { min, max, step } = this.props;
    const percent = offset / this.slider;
    const value = Math.round((min + ((max - min) * percent)) / step) * step;
    return Math.max(Math.min(value, max), min);
  }

  /**
   * 获取组件line的宽度
   */
  getLayout = (e) => {
    this.slider = e.layout.width;
    this.init()
  }

  handlePanResponderStart = () => {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    this.setState({ isVisible: true });
  }

  handlePanResponderMove = (event, gestureState) => {
    const { disabled } = this.props;
    if (disabled) {
      return false;
    }
    event.preventDefault();

    let offset = this.offsetStart + gestureState.moveX;
    if (offset < 0) {
      offset = 0;
      const newValue = this.getValueByOffset(offset);
      this.setState({
        offset,
        value: newValue,
      });
      return;
    }

    if (offset > this.slider) {
      offset = this.slider;
      const newValue = this.getValueByOffset(offset);
      this.setState({
        offset,
        value: newValue,
      });
      return;
    }

    const value = this.getValueByOffset(offset);
    offset = this.getOffsetByValue(value);
    this.setState({ offset, value });
  }

  onPanResponderEnd = () => {
    const { onChange } = this.props;
    const { value } = this.state;
    if (isNaN(value)) {
      return;
    }
    this.setState({
      isVisible: false,
    });
    if (typeof onChange === 'function') {
      onChange(value);
    }
  }

  render() {
    const {
      disabled,
      styles,
    } = this.props;
    const { offset } = this.state

    const sliderWrapper = [
      styles!.container,
    ] as ViewStyle;

    const sliderContent = [
      styles!.zaSliderContent,
    ] as ViewStyle;

    const sliderLine = [
      styles!.zaSliderLine,
    ] as ViewStyle;
 
    const sliderInnerLine = [
      styles!.zaSliderInnerLine,
    ] as ViewStyle;

    const sliderHandle = [
      styles!.zaSliderHandle,
    ] as ViewStyle;

    return (
      <View style={sliderWrapper}>
        {this.locatedTooltip()}
        <View style={sliderContent}>
          <View style={[sliderLine, {opacity: disabled ? 0.6 : 1}]} onLayout={({ nativeEvent: e }) => this.getLayout(e)}>
            <View style={[sliderInnerLine, {width: offset}]} />
          </View>
          <View
            disabled={disabled}
            style={[sliderHandle, { left: offset }]}
            {...this.panResponder.panHandlers}
          />
        </View>
      </View>
    );
  }
}
