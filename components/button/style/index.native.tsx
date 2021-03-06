import variables from '../../style/themes/default.native';

export default {
  container: {
    flexDirection: 'row',
  },

  // base
  wrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: variables.button_height_md,
    paddingLeft: variables.button_padding_h_md,
    paddingRight: variables.button_padding_h_md,
  },
  textStyle: {
    fontSize: variables.button_font_size_md,
  },
  iconStyle: {
    marginRight: variables.button_padding_h_md / 2,
  },

  defaultWrapper: {
    borderWidth: 1,
    backgroundColor: variables.button_default_background,
    borderColor: variables.button_default_border,
  },
  defaultText: {
    color: variables.button_default_color,
  },
  defaultActiveWrapper: {
    backgroundColor: variables.button_default_active_background,
    borderColor: variables.button_default_active_border,
  },
  defaultActiveText: {
    color: variables.button_default_active_color,
  },
  defaultDisabledText: {
    color: variables.button_disabled_color_ghost,
  },
  defaultGhostWrapper: {
    backgroundColor: variables.button_default_ghost_background,
    borderColor: variables.button_default_ghost_border,
  },
  defaultGhostText: {
    color: variables.button_default_ghost_color,
  },
  defaultGhostActiveWrapper: {
    backgroundColor: variables.button_default_ghost_active_background,
    borderColor: variables.button_default_ghost_active_border,
  },
  defaultGhostActiveText: {
    color: variables.button_default_ghost_active_color,
  },

  primaryWrapper: {
    backgroundColor: variables.button_primary_background,
  },
  primaryText: {
    color: variables.button_primary_color,
  },
  primaryActiveWrapper: {
    backgroundColor: variables.button_primary_active_background,
  },
  primaryActiveText: {
    color: variables.button_primary_active_color,
  },
  primaryGhostWrapper: {
    borderColor: variables.button_primary_ghost_border,
  },
  primaryGhostText: {
    color: variables.button_primary_ghost_color,
  },
  primaryGhostActiveWrapper: {
    borderColor: variables.button_primary_ghost_active_color,
  },
  primaryGhostActiveText: {
    color: variables.button_primary_ghost_active_color,
  },

  successWrapper: {
    backgroundColor: variables.button_success_background,
  },
  successText: {
    color: variables.button_success_color,
  },
  successActiveWrapper: {
    backgroundColor: variables.button_success_active_background,
  },
  successActiveText: {
    color: variables.button_success_active_color,
  },
  successGhostWrapper: {
    borderColor: variables.button_success_ghost_border,
  },
  successGhostText: {
    color: variables.button_success_ghost_color,
  },
  successGhostActiveWrapper: {
    borderColor: variables.button_success_ghost_active_color,
  },
  successGhostActiveText: {
    color: variables.button_success_ghost_active_color,
  },

  warningWrapper: {
    backgroundColor: variables.button_warning_background,
  },
  warningText: {
    color: variables.button_warning_color,
  },
  warningActiveWrapper: {
    backgroundColor: variables.button_warning_active_background,
  },
  warningActiveText: {
    color: variables.button_warning_active_color,
  },
  warningGhostWrapper: {
    borderColor: variables.button_warning_ghost_border,
  },
  warningGhostText: {
    color: variables.button_warning_ghost_color,
  },
  warningGhostActiveWrapper: {
    borderColor: variables.button_warning_ghost_active_color,
  },
  warningGhostActiveText: {
    color: variables.button_warning_ghost_active_color,
  },

  errorWrapper: {
    backgroundColor: variables.button_error_background,
  },
  errorText: {
    color: variables.button_error_color,
  },
  errorActiveWrapper: {
    backgroundColor: variables.button_error_active_background,
  },
  errorActiveText: {
    color: variables.button_error_active_color,
  },
  errorGhostWrapper: {
    borderColor: variables.button_error_ghost_border,
  },
  errorGhostText: {
    color: variables.button_error_ghost_color,
  },
  errorGhostActiveWrapper: {
    borderColor: variables.button_error_ghost_active_color,
  },
  errorGhostActiveText: {
    color: variables.button_error_ghost_active_color,
  },

  // size
  mdWrapper: {
    height: variables.button_height_md,
    paddingLeft: variables.button_padding_h_md,
    paddingRight: variables.button_padding_h_md,
  },
  mdCircleWrapper: {
    width: variables.button_height_md,
  },
  mdText: {
    fontSize: variables.button_font_size_md,
  },
  mdIcon: {
    marginRight: variables.button_padding_h_md / 2,
  },
  lgWrapper: {
    height: variables.button_height_lg,
    paddingLeft: variables.button_padding_h_lg,
    paddingRight: variables.button_padding_h_lg,
  },
  lgCircleWrapper: {
    width: variables.button_height_lg,
  },
  lgText: {
    fontSize: variables.button_font_size_lg,
  },
  lgIcon: {
    marginRight: variables.button_padding_h_lg / 2,
  },
  smWrapper: {
    height: variables.button_height_sm,
    paddingLeft: variables.button_padding_h_sm,
    paddingRight: variables.button_padding_h_sm,
  },
  smCircleWrapper: {
    width: variables.button_height_sm,
  },
  smText: {
    fontSize: variables.button_font_size_sm,
  },
  smIcon: {
    marginRight: variables.button_padding_h_sm / 2,
  },
  xsWrapper: {
    height: variables.button_height_xs,
    paddingLeft: variables.button_padding_h_xs,
    paddingRight: variables.button_padding_h_xs,
  },
  xsCircleWrapper: {
    width: variables.button_height_xs,
  },
  xsText: {
    fontSize: variables.button_font_size_xs,
  },
  xsIcon: {
    marginRight: variables.button_padding_h_xs / 2,
  },

  // shape
  radiusWrapper: {
    borderRadius: variables.radius_md,
  },
  rectWrapper: {
    borderRadius: 0,
  },
  roundWrapper: {
    borderRadius: variables.radius_round,
  },
  circleWrapper: {
    width: variables.button_height_md,
    borderRadius: variables.radius_round,
    paddingLeft: 0,
    paddingRight: 0,
  },

  // ghost
  ghostWrapper: {
    borderWidth: 1,
    backgroundColor: 'transparent',
  },

  // disabled
  disabledWrapper: {
    opacity: variables.button_disabled_opacity,
  },

  disabledText: {
    color: variables.color_text_disabled,
  },

  // disabled ghost
  disabledGhostWrapper: {
    opacity: 1,
    borderColor: variables.button_disabled_color_ghost,
  },

  // disabled ghost text
  disabledGhostText: {
    color: variables.button_disabled_color_ghost,
  },
};
