import { HorizontalStartIcon, HorizontalEndIcon } from "@illa-design/icon"
import { PanelConfig } from "@/page/App/components/InspectPanel/interface"
import { colorSchemeOptions } from "@/widgetLibrary/PublicSector/colorSchemeOptions"
import i18n from "@/i18n/config"

export const RADIO_GROUP_PANEL_CONFIG: PanelConfig[] = [
  {
    id: "radioGroup-options",
    groupName: i18n.t("editor.inspect.setter_group.options"),
    children: [
      {
        id: "radioGroup-options-mode",
        attrName: "optionMode",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          {
            label: "Manual",
            value: "manual",
          },
          {
            label: "Mapped",
            value: "mapped",
          },
        ],
      },
      {
        id: "radioGroup-basic-options",
        useCustomLayout: true,
        attrName: "options",
        setterType: "OPTION_LIST_SETTER",
        bindAttrName: "optionMode",
        shown: (value) => !value || value === "manual",
      },
      {
        id: "radioGroup-option-data-sources",
        labelName: i18n.t("editor.inspect.setter_label.data_sources"),
        attrName: "dataSources",
        setterType: "INPUT_SETTER",
        bindAttrName: "optionMode",
        shown: (value) => value === "mapped",
      },
      {
        id: "radioGroup-option-mapped",
        labelName: i18n.t("editor.inspect.setter_label.mapped_option"),
        useCustomLayout: true,
        attrName: "mappedOption",
        setterType: "OPTION_MAPPED_SETTER",
        bindAttrName: "optionMode",
        shown: (value) => value === "mapped",
      },
      {
        id: "radioGroup-basic-defaultValue",
        labelName: i18n.t("editor.inspect.setter_label.default_value"),
        attrName: "value",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "radioGroup-label",
    groupName: i18n.t("editor.inspect.setter_group.label"),
    children: [
      {
        id: "radioGroup-label-label",
        labelName: i18n.t("editor.inspect.setter_label.label"),
        attrName: "label",
        setterType: "INPUT_SETTER",
      },
      {
        id: "radioGroup-label-caption",
        labelName: i18n.t("editor.inspect.setter_label.caption"),
        attrName: "labelCaption",
        setterType: "INPUT_SETTER",
      },
      {
        id: "radioGroup-label-position",
        labelName: i18n.t("editor.inspect.setter_label.label_position"),
        attrName: "labelPosition",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          { label: "Left", value: "left" },
          { label: "Top", value: "top" },
        ],
      },
      {
        id: "radioGroup-label-alignment",
        labelName: i18n.t("editor.inspect.setter_label.label_alignment"),
        attrName: "labelAlign",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          {
            label: <HorizontalStartIcon />,
            value: "left",
          },
          {
            label: <HorizontalEndIcon />,
            value: "right",
          },
        ],
      },
      {
        id: "radioGroup-label-labelWidth",
        labelName: i18n.t("editor.inspect.setter_label.label_width"),
        attrName: "labelWidth",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "radioGroup-validation",
    groupName: i18n.t("editor.inspect.setter_group.validation"),
    children: [
      {
        id: "radioGroup-validation-required",
        labelName: i18n.t("editor.inspect.setter_label.required_field"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        attrName: "required",
      },
      {
        id: "radioGroup-validation-hide-message",
        labelName: i18n.t(
          "editor.inspect.setter_label.hide_validation_message",
        ),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        attrName: "hideValidationMessage",
      },
    ],
  },
  {
    id: "radioGroup-interaction",
    groupName: i18n.t("editor.inspect.setter_group.interaction"),
    children: [
      {
        id: "radioGroup-interaction-disabled",
        labelName: i18n.t("editor.inspect.setter_label.disabled"),
        attrName: "disabled",
        setterType: "INPUT_SETTER",
        placeholder: "{{false}}",
      },
    ],
  },
  {
    id: "radioGroup-Adornments",
    groupName: i18n.t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: "radioGroup-adornments-tooltip",
        labelName: i18n.t("editor.inspect.setter_label.tooltip"),
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "radioGroup-layout",
    groupName: i18n.t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: "radioGroup-layout-hidden",
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        setterType: "INPUT_SETTER",
        attrName: "hidden",
        placeholder: "false",
      },
      {
        id: "radioGroup-style-direction",
        labelName: i18n.t("editor.inspect.setter_label.label_alignment"),
        setterType: "RADIO_GROUP_SETTER",
        attrName: "direction",
        options: ["vertical", "horizontal"],
      },
    ],
  },
  {
    id: `radioGroup-styles`,
    groupName: i18n.t("editor.inspect.setter_group.style"),
    children: [
      {
        id: "radioGroup-style",
        setterType: "LIST_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.styles"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: "radioGroup-style-color",
            labelName: i18n.t("editor.inspect.setter_label.theme_color"),
            attrName: "colorScheme",
            setterType: "COLOR_SELECT_SETTER",
            defaultValue: "blue",
            options: colorSchemeOptions,
          },
        ],
      },
    ],
  },
]
