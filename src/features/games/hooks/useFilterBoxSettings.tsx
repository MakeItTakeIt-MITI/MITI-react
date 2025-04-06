import { useCallback, useMemo } from "react";
import useDateSelectionStore from "../../../store/useDateSelectionStore.ts";
import useStatusSelectionStore from "../../../store/useStatusSelectionStore.ts";
import useTimeFieldStore from "../../../store/useTimeStore.ts";
import useGameFilterStore from "../../../store/useGameFilterStore.ts";
import {
  initialDateField,
  yearMonthToDate,
} from "../../../constants/calender.ts";

export const useFilterBoxSettings = (
  setDisplayFilterBox: (arg: boolean) => void
) => {
  const { setYearMonthDay, setDateField, dateField } = useDateSelectionStore();
  const { resetTimeField, selectedDayStatus, selectedHour, selectedMinute } =
    useTimeFieldStore();
  const { selectedStatuses, resetStatuses } = useStatusSelectionStore();
  const {
    setSelectedDate,
    resetFilterHeader,
    setSelectedTimeDate,
    setSelectedStatus,
  } = useGameFilterStore();

  const handleResetFilters = useCallback(() => {
    setYearMonthDay(yearMonthToDate);
    setSelectedDate(initialDateField);
    setDateField(initialDateField);
    resetFilterHeader();
    resetTimeField();
    resetStatuses();
  }, [yearMonthToDate, initialDateField, initialDateField]);

  const timeFormat = useMemo(
    () => `${selectedDayStatus} ${selectedHour}:${selectedMinute}`,
    [selectedDayStatus, selectedHour, selectedMinute]
  );

  const handleApplyFilters = () => {
    if (dateField.length > 1) {
      setSelectedDate(dateField);
    }
    setSelectedTimeDate(timeFormat);

    if (selectedStatuses.length >= 1 && selectedStatuses.length < 2) {
      setSelectedStatus(`${selectedStatuses}`);
    } else if (selectedStatuses.length > 1 && selectedStatuses.length <= 4) {
      const statusSpacing = `${selectedStatuses} `;
      setSelectedStatus(statusSpacing);
    }

    setDisplayFilterBox(false);
  };

  return {
    handleResetFilters,
    handleApplyFilters,
  };
};
