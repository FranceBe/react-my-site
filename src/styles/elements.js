import { palette } from './palette';

export const elements = {
    button: {
        default_height: '30px',
        default_width: '100px',
        default_font_weight: '600',
        default_border_color: palette.pink_regular,
        default_background_color: palette.white,
        default_background_hover_color: palette.pink_lighter,
        default_box_shadow: `3px 3px 5px -1px ${palette.grey_regular}`,
        disabled_background_color: palette.pink_lightest,
        disabled_text_color: palette.grey_light,
    },
    menu: {
        background_color: palette.pink_lightest,
        default_height: '150px',

    },
};
