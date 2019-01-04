import React, { PureComponent, CSSProperties } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
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
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 0,
    disabled: false,
    styles: sliderStyles,
  };

  private slider;
  private panResponder;
  private offsetStart: number = 0;

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || 0,
      offset: 0,
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

    // 减去按钮的宽度(约值)
    return (this.slider - 32) * ((value - min) / (max - min));
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
   * 获取原生slider组件的宽度
   */
  getLayout = (e) => {
    this.slider = e.layout.width;
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

    // let offset = this.offsetStart + gestureState.moveX;
    // if (offset < 0) {
    //   offset = 0;
    //   const newValue = this.getValueByOffset(offset);
    //   this.setState({
    //     offset,
    //     value: newValue,
    //   });
    //   return false;
    // }

    // if (offset > this.slider) {
    //   offset = this.slider;
    //   const newValue = this.getValueByOffset(offset);
    //   this.setState({
    //     offset,
    //     value: newValue,
    //   });
    //   return false;
    // }

    // const value = this.getValueByOffset(offset);
    // offset = this.getOffsetByValue(value);
    // this.setState({ offset, value });
    // return true;
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

    const sliderWrapper = [
      styles!.container,
    ] as ViewStyle;

    const sliderContent = [
      styles!.zaSliderContent,
    ] as ViewStyle;

    const sliderLine = [
      styles!.zaSliderLine,
    ] as ViewStyle;

    const SliderHandle = [
      styles!.zaSliderHandle,
    ] as ViewStyle;

    const viewStyle = {
      transform: [{
        translateX: this.state.offset,
      }],
    };

    return (
      <View style={sliderWrapper} onLayout={({ nativeEvent: e }) => this.getLayout(e)}>
        {this.locatedTooltip()}
        <View style={sliderContent}>
          <View style={sliderLine}></View>
          <View
            disabled={disabled}
            style={[SliderHandle, viewStyle]}
            {...this.panResponder.panHandlers}
          ></View>
        </View>
      </View>
    );
  }
}
