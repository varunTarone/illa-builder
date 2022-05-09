import chroma from "chroma-js"
import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const QueryListContainer = css`
  display: flex;
  flex-direction: column;
  width: 255px;
  border-right: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
`

export const QueryListHeaderWrapper = css``
export const QueryListHeader = css`
  width: 100%;
  height: 48px;
  display: flex;
  padding: 13px 16px;
  align-items: center;
  color: ${globalColor(`--${illaPrefix}-grayBlue-06`)};
`

export const QueryListHeaderInput = css`
  justify-content: flex-end;
`

export const QueryListHeaderDisplay = css`
  justify-content: flex-start;
`

export const HeaderTitle = css`
  white-space: nowrap;
`

export const HeaderSearchIcon = css`
  cursor: pointer;
  &:hover {
    color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  }
`

export const applyNewButton = (isActive: boolean): SerializedStyles => {
  const activeCss = css`
    background-color: ${globalColor(
    `--${illaPrefix}-brand-purple-05`,
  )}!important;
  `

  return css`
    background-color: ${globalColor(
    `--${illaPrefix}-brand-purple-07`,
  )}!important;
    color: ${globalColor(`--${illaPrefix}-brand-purple-01`)}!important;
    justify-content: center;
    font-size: 14px;
    margin: 0 16px 8px 16px;
    height: 32px;
    border-radius: 8px !important;
    line-height: 32px;
    flex-shrink: 0;

    ${isActive && activeCss}

    transition: background-color .2s ease-in-out;

    & > * {
      font-size: 14px !important;
    }

    &:hover {
      background-color: ${globalColor(
    `--${illaPrefix}-brand-purple-06`,
  )}!important;
    }
  `
}

export const NewButtonContentWrapper = css`
  display: flex;
  align-items: center;
`

export const AddIconInNewButton = css`
  margin-right: 8px;
`

export const QueryItemList = css`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
`

export function applyQueryItem(isSelected: boolean): SerializedStyles {
  const backgroundColorCss = css`
    background: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  `
  return css`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 9px 16px;
    height: 40px;

    &:hover {
      ${backgroundColorCss}
    }

    ${isSelected && backgroundColorCss}
  `
}

export const QueryItemIcon = css`
  position: relative;
  color: ${globalColor(`--${illaPrefix}-grayBlue-07`)};
`

export const QueryItemTitleWrapper = css`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  margin-left: 8px;
  max-width: 164px;
  overflow: hidden;
  margin-right: 8px;
`

export function applyQueryItemTitle(isWarning: boolean): SerializedStyles {
  const warningColor = css`
    color: ${globalColor(`--${illaPrefix}-red-03`)};
  `
  return css`
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    ${isWarning && warningColor}
  `
}

export const WarningIndicator = css`
  position: absolute;
  color: ${globalColor(`--${illaPrefix}-orange-06`)};
  bottom: 0;
  right: 0;

  & > path:last-child {
    fill: ${globalColor(`--${illaPrefix}-orange-03`)};
  }
`

export const UpdatedIndicator = css`
  display: inline-block;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
  margin-left: 8px;
  flex: 0 0 6px;
`
export const QueryItemTime = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-06`)};
`

export const NewQueryOptionsList = css`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 220px;
`

export const NewQueryOptionsItem = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 9px 16px;
  height: 40px;

  &:hover {
    background: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  }
`
export const SearchInput = css`
  margin-right: 8px;
  & > span {
    border-radius: 8px !important;
    border-color: ${globalColor(`--${illaPrefix}-brand-purple-01`)}!important;
    box-shadow: 0 0 8px 0
      ${chroma(globalColor(`--${illaPrefix}-brand-purple-01`))
    .alpha(0.2)
    .hex()};
  }
`

export const SearchInputIcon = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
`

export const CloseBtn = css`
  & > span {
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  }
`
export const NoMatchFoundWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  font-size: 14px;

  & > svg {
    margin-bottom: 8px;
  }
`

export const EmptyQueryListPlaceholder = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  padding: 16px;
  margin: 0 16px;
  font-size: 14px;
  border: 2px dashed ${globalColor(`--${illaPrefix}-grayBlue-09`)};
`

export function applyActionMenu(top?: number, left?: number): SerializedStyles {
  return css`
    position: fixed !important;
    top: ${top ?? 0}px;
    left: ${left ?? 0}px;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 184px;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    box-shadow: 0 2px 16px 0 ${globalColor(`--${illaPrefix}-blackAlpha-05`)};
    border-radius: 8px;
    border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
  `
}

export function applyActionMenuVisible(isVisible: boolean): SerializedStyles {
  if (isVisible) {
    return css`
      opacity: 1;
    `
  }

  return css`
    opacity: 0;
    top: -9999px;
  `
}

export const DuplicateAction = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)}!important;
`

export const DeleteAction = css`
  color: ${globalColor(`--${illaPrefix}-red-03`)}!important;
`
