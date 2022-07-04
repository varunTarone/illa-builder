import { DatePickerProps } from "@illa-design/date-picker"
import LabelProps from "@/widgetLibrary/PublicSector/Label/interface"
import { ValidateMessageProps } from "@/widgetLibrary/PublicSector/InvalidMessage/interface"
import { TooltipWrapperProps } from "@/widgetLibrary/PublicSector/TooltipWrapper/interface"

export interface WrappedDateTimeProps
  extends LabelProps,
    ValidateMessageProps,
    Pick<TooltipWrapperProps, "tooltipText">,
    Pick<DatePickerProps, "placeholder" | "disabled" | "readOnly"> {
  value?: string
  dateFormat?: string
  timeFormat?: string
  minuteStep?: number
  tooltipText?: string
  loading?: boolean
  showClear?: DatePickerProps["allowClear"]
  minDate?: string
  maxDate?: string
  handleUpdateDsl: (value: Record<string, string>) => void
  styles?: {
    colorScheme?: DatePickerProps["colorScheme"]
  }
}
