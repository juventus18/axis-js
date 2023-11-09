import { TextIndex } from "./TTextIndex";

/**
 * Snapshot options overriding the video stream configuration. Not specifying any options will
 * get you the characteristics of the video stream.
 */
export type DynamicTextOverlayOptions = {
    /**
     * gettext = Get the dynamic text overlay.
     * settext = Set the dynamic text overlay.
     */
    action: 'settext' | 'gettext';

    /**
     * The overlay text to apply, only applicable with action=settext.
     */
    text?: string;

    /**
     * ***TODO:NOT IMPLEMENTED***
     * I think this might only be supported on cameras running firmware 11 and
     * above. The Axis documentation is not clear on this, but on 2023–09–19
     * there is an entry in the changelog: "Overlay API: New parameter added to
     * Dynamic text overlays." and I suspect this is the parameter.
     *
     * Select a dynamic text slot. If omitted, a default value of 1 is used. A text index for a slot maps text to the
     * modifiers #D1...#D16 . For example, text_index=3&text=Hello means that
     * Hello will be mapped to #D3.
     */
    text_index?: TextIndex;

    /**
     * Selects the video source (1...n). If omitted the default value camera 1 is used.
     * This argument is only valid for Axis products with more than one video source. That is
     * cameras with multiple view areas and video encoders with multiple video channels.
     */
    camera?: number;
}
