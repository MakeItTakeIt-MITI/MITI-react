# State Management Documentation

## Overview

This project uses **[Zustand](https://github.com/pmndrs/zustand) v4.5.2** for global state management.

Zustand is a lightweight, unopinionated state management library for React. Each store is a standalone hook created with `create()`. Stores are imported directly into components — no Provider wrapper is needed.

```ts
// Basic usage pattern
import { useExampleStore } from '@/store/useExampleStore';

const { value, setValue } = useExampleStore();
```

---

## Store Index

| Store | File | Used On |
|---|---|---|
| [`useLoginStore`](#1-useloginstore) | `src/features/auth/state/useLoginStore.tsx` | Auth, KakaoAuthHandler, Withdraw |
| [`useMapCoordinatesStore`](#2-usemapcoordinatesstore) | `src/store/NaverMap/useMapCoordinatesStore.tsx` | Games (map) |
| [`useSelectedStore`](#3-useselectedstore) | `src/store/NaverMap/useSelectedStore.tsx` | Games (map) |
| [`useTimeField`](#4-usetimefield) | `src/store/Sidebar/useTimeFieldStore.ts` | Games (sidebar/filter) |
| [`useTimeFieldStore`](#5-usetimefieldstore) | `src/store/useTimeStore.ts` | Games (sidebar/filter) |
| [`useCurrentLocationStore`](#6-usecurrentlocationstore) | `src/store/useCurrentLocationStore.ts` | ⚠️ Unused |
| [`useCurrentMonthStore`](#7-usecurrentmonthstore) | `src/store/useCurrentMonthStore.ts` | Games (date filter) |
| [`useDateSelectionStore`](#8-usedateselectionstore) | `src/store/useDateSelectionStore.ts` | Games (date filter) |
| [`useGameFilterStore`](#9-usegamefilterstore) | `src/store/useGameFilterStore.ts` | Games (filter header) |
| [`useLatLongStore`](#10-uselatlongstore) | `src/store/useLatLongStore.ts` | ⚠️ Unused |
| [`useStatusSelectionStore`](#11-usestatusselectionstore) | `src/store/useStatusSelectionStore.ts` | Games (filter) |
| [`useGameStatusStore`](#12-usegamestatusstore) | `src/features/games/store/useGameStatusStore.ts` | Games (sidebar/filter) |
| [`useDateStore`](#13-usedatestore) | `src/features/games/components/sidebar/store/useDateStore.ts` | Games (sidebar/filter) |
| [`useProvinceStore`](#14-useprovincestore) | `src/features/games/components/sidebar/store/useProvinceStore.ts` | ⚠️ Unused |

---

## Stores

### 1. `useLoginStore`

**File:** `src/features/auth/state/useLoginStore.tsx`

Manages the authentication state of the logged-in user. Tracks whether a user session is active and stores the user's profile data.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `isLogged` | `boolean` | `false` | Whether the user is currently authenticated |
| `user` | `UserDataField \| null` | `null` | The authenticated user's profile data |

**Functions**

#### `setIsLogged(arg: boolean)`

Sets the authentication status.

- **Parameter:** `arg` — `true` to mark the user as logged in, `false` to mark as logged out.
- **Used on:** Auth page (`src/pages/auth/Auth.tsx`), KakaoAuthHandler page (`src/pages/auth/KakaoAuthHandler.tsx`)

#### `setUser(arg: UserDataField)`

Stores the user profile object returned from the server after a successful login.

- **Parameter:** `arg` — A `UserDataField` object containing the user's profile (id, nickname, etc.).
- **Used on:** Auth page (`src/pages/auth/Auth.tsx`), KakaoAuthHandler page (`src/pages/auth/KakaoAuthHandler.tsx`)

**Pages using this store:** Auth, KakaoAuthHandler, Withdraw

---

### 2. `useMapCoordinatesStore`

**File:** `src/store/NaverMap/useMapCoordinatesStore.tsx`

Stores the map center coordinates used to position the Naver Map view. Defaults to central Seoul.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `coordinates` | `{ lat: string \| number, long: string \| number }` | `{ lat: "37.554722", long: "126.972778" }` | Current map center (Seoul by default) |

**Functions**

#### `setCoordinates(lat: string | number, long: string | number)`

Updates the map center to a new latitude/longitude position. Called when a user clicks a game marker to pan the map to that game's location.

- **Parameter:** `lat` — Latitude value (accepts string or number).
- **Parameter:** `long` — Longitude value (accepts string or number).
- **Used in:** `src/features/naver_map/components/GamesMap.tsx`, `src/features/naver_map/components/GameMap.tsx`

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 3. `useSelectedStore`

**File:** `src/store/NaverMap/useSelectedStore.tsx`

Tracks which map marker/address is currently selected. Controls the visibility of the address info panel on the map.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `isSelected` | `boolean` | `false` | Whether any marker is currently selected |
| `selectedAddress` | `string \| null` | `null` | The address of the selected marker |

**Functions**

#### `setSelectedAddress(value: string)`

Directly sets the selected address string.

- **Parameter:** `value` — The address string to set as selected.
- **Used in:** `GamesMap.tsx`, `GameMap.tsx`

#### `setSelected(value: boolean)`

Directly sets the `isSelected` flag.

- **Parameter:** `value` — `true` to show selection, `false` to hide it.
- **Used in:** `GamesMap.tsx`, `GameMap.tsx`

#### `toggleSelected()`

Toggles the selection state. If the same address is provided again, it deselects. Otherwise sets the new address as selected.

> **Note:** The interface signature declares no parameters (`toggleSelected: () => void`), but the implementation accepts an optional `address?: string` argument. This discrepancy means the address-based toggle logic is not accessible through the typed interface.

- **Used in:** `GamesMap.tsx`, `GameMap.tsx`, `MapIcon.tsx`

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 4. `useTimeField`

**File:** `src/store/Sidebar/useTimeFieldStore.ts`
**Export name:** `useTimeField` (note: the filename is `useTimeFieldStore.ts` — see also [`useTimeFieldStore`](#5-usetimefieldstore) which is a separate store)

Stores the raw numeric hour and minutes for the game time filter, plus AM/PM day type. Used as the source of truth for the time picker UI components.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `hour` | `number` | `0` | Selected hour (0–23) |
| `minutes` | `number` | `0` | Selected minutes (0–59) |
| `dayType` | `string` | `""` | AM/PM indicator (e.g. `"오전"`, `"오후"`) |

**Functions**

#### `setHour(hour: number)`

Updates only the hour portion of the selected time.

- **Parameter:** `hour` — Integer between 0 and 23.
- **Used in:** `TimesField.tsx`, `TimesFieldMobile.tsx`

#### `setMinutes(minutes: number)`

Updates only the minutes portion of the selected time.

- **Parameter:** `minutes` — Integer (typically a multiple of 10, e.g. 0, 10, 20 … 50).
- **Used in:** `TimesField.tsx`, `TimesFieldMobile.tsx`

#### `resetTime()`

Resets both `hour` and `minutes` back to `0`. Does not reset `dayType`.

- **Used in:** `Games.tsx`, `MobileFilterModal.tsx`, `CurrentFilterSettings.tsx`

#### ⚠️ `setDay(dayType: string)` — Unused

Sets the `dayType` field (AM/PM string).

- **Parameter:** `dayType` — A string such as `"오전"` or `"오후"`.
- **Not called anywhere in the codebase.** The `dayType` field is readable but this setter has no callers.

#### ⚠️ `setTime(hour: number, minutes: number)` — Unused

Sets both `hour` and `minutes` in a single call.

- **Parameter:** `hour` — Integer 0–23.
- **Parameter:** `minutes` — Integer 0–59.
- **Not called anywhere in the codebase.** Individual `setHour` / `setMinutes` are used instead.

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 5. `useTimeFieldStore`

**File:** `src/store/useTimeStore.ts`
**Export name:** `useTimeFieldStore` (default export; note: the filename is `useTimeStore.ts` — see also [`useTimeField`](#4-usetimefield) which is a separate store)

Stores the formatted display strings for the game time filter (AM/PM label, hour string, minute string, and combined full-time string). Used to synchronize the filter header display with the time picker.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `selectedDayStatus` | `string` | `"오전"` | AM/PM label |
| `selectedHour` | `string` | `"00"` | Hour as a zero-padded string |
| `selectedMinute` | `string` | `"00"` | Minute as a zero-padded string |
| `formattedFullTime` | `string` | `"00:00"` | Combined display string (e.g. `"오전 09:30"`) |

**Functions**

#### `setSelectedDayStatus(dayStatus: string)`

Updates the AM/PM label.

- **Parameter:** `dayStatus` — A string such as `"오전"` or `"오후"`.
- **Used in:** `TimesField.tsx`, `TimesFieldMobile.tsx`

#### `setSelectedHour(hour: string)`

Updates the displayed hour string.

- **Parameter:** `hour` — Zero-padded hour string, e.g. `"09"`.
- **Used in:** `TimesField.tsx`, `TimesFieldMobile.tsx`

#### `setSelectedMinute(minute: string)`

Updates the displayed minute string.

- **Parameter:** `minute` — Zero-padded minute string, e.g. `"30"`.
- **Used in:** `TimesField.tsx`, `TimesFieldMobile.tsx`

#### `setFormattedFullTime(time: string)`

Sets the combined time display string shown in the filter header.

- **Parameter:** `time` — A formatted string such as `"오전 09:30"`.
- **Used in:** `useTimeFormatting.ts`

#### `resetTimeField()`

Resets `selectedDayStatus`, `selectedHour`, and `selectedMinute` to defaults. Does not reset `formattedFullTime`.

- **Used in:** `Games.tsx`, `MobileFilterModal.tsx`, `CurrentFilterSettings.tsx`

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 6. `useCurrentLocationStore`

**File:** `src/store/useCurrentLocationStore.ts`

> ⚠️ **This store is currently unused.** It is never imported outside its own file.

Uses Zustand's `persist` middleware to save the user's current geolocation to `localStorage` under the key `"geolocationData"`.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `location` | `{ latitude: number, longitude: number }` | `{ latitude: 0, longitude: 0 }` | The user's current GPS coordinates |

**Functions**

#### ⚠️ `setCurrentMyLocation(latitude: number, longitude: number)` — Unused

Saves the device's current GPS position into global state (and localStorage via persist).

- **Parameter:** `latitude` — Latitude from the browser Geolocation API.
- **Parameter:** `longitude` — Longitude from the browser Geolocation API.
- **Not used anywhere.** This store was likely intended to support location-based map centering but was never wired up.

**Pages using this store:** None

---

### 7. `useCurrentMonthStore`

**File:** `src/store/useCurrentMonthStore.ts`

Tracks which calendar month the date filter is currently viewing. Initialized to the current real-world month.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `currentMonth` | `number` | Current month (1–12) | The month currently displayed in the calendar filter |

**Functions**

#### `setCurrentMonth(arg: number)`

Updates the displayed calendar month.

- **Parameter:** `arg` — Month number (1 = January … 12 = December).
- **Used in:** `DateCard.tsx` (Games page date filter)

#### ⚠️ `resetCurrentMonth()` — Unused

Resets `currentMonth` back to the month that was current when the page loaded.

- **Not called anywhere in the codebase.**

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 8. `useDateSelectionStore`

**File:** `src/store/useDateSelectionStore.ts`

Manages the selected date in both display format (e.g. `"4.20 (일)"`  for the filter header) and API-ready format (e.g. `"2026-04-20"`). Initialized to today's date using the `DATES()` utility.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `selectedStatuses` | `string` | `""` | Unused field (leftover, always empty) |
| `dateField` | `string` | Today in `"M.D (요일)"` format | Display string shown in filter header |
| `yearMonthDay` | `string` | Today in `"YYYY-MM-DD"` format | ISO-style date string sent to the API |

**Functions**

#### `setDateField(dateField: string)`

Updates the human-readable date display shown in the filter header chip.

- **Parameter:** `dateField` — Formatted string such as `"4.20 (일)"`.
- **Used in:** `useFilterBoxSettings.tsx`, `DateCard.tsx`

#### `setYearMonthDay(yearMonthDay: string)`

Updates the ISO-format date string used in API requests.

- **Parameter:** `yearMonthDay` — Date string in `"YYYY-MM-DD"` format.
- **Used in:** `useFilterBoxSettings.tsx`, `DateCard.tsx`

#### ⚠️ `resetDateField()` — Unused

Resets `dateField` to today's display string.

- **Not called anywhere in the codebase.** Reset is handled instead by `resetFilterHeader()` in `useGameFilterStore`.

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 9. `useGameFilterStore`

**File:** `src/store/useGameFilterStore.ts`

Stores the computed filter header display values — the final formatted strings that appear as chip labels in the Games page filter bar (date, time, and status). Acts as a presentation layer on top of the raw filter stores.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `selectedDate` | `string` | Today in `"M.D (요일)"` format | Date label shown in the filter chip |
| `selectedTimeDate` | `string` | `"오전 00:00"` | Time label shown in the filter chip |
| `selectedStatus` | `string` | `"모집중,모집 완료,경기 완료,경기 취소"` | Comma-separated status labels in the filter chip |

**Functions**

#### `setSelectedDate(date: string)`

Updates the date chip display label.

- **Parameter:** `date` — Formatted date string, e.g. `"4.20 (일)"`.
- **Used in:** `useFilterBoxSettings.tsx`

#### `setSelectedTimeDate(timeDate: string)`

Updates the time chip display label.

- **Parameter:** `timeDate` — Formatted time string, e.g. `"오전 09:30"`.
- **Used in:** `useFilterBoxSettings.tsx`

#### `setSelectedStatus(status: string)`

Updates the status chip display label.

- **Parameter:** `status` — Comma-separated status string, e.g. `"모집중,모집 완료"`.
- **Used in:** `useFilterBoxSettings.tsx`

#### `resetFilterHeader()`

Resets all three chip labels back to their initial default values in one call.

- **Used in:** `useFilterBoxSettings.tsx`

#### ⚠️ `resetSelectedDate()` — Unused

Resets only the `selectedDate` chip label to today's date.

- **Not called anywhere.** `resetFilterHeader()` covers the full reset instead.

#### ⚠️ `resetSelectedTimeDate()` — Unused

Resets only the `selectedTimeDate` chip label to `"오전 00:00"`.

- **Not called anywhere.** `resetFilterHeader()` covers the full reset instead.

#### ⚠️ `resetSelectedStatus()` — Unused

Resets only the `selectedStatus` chip label to the default all-statuses string.

- **Not called anywhere.** `resetFilterHeader()` covers the full reset instead.

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 10. `useLatLongStore`

**File:** `src/store/useLatLongStore.ts`

> ⚠️ **This store is currently unused.** Its only reference in `src/features/games/NaverMap.tsx` is commented out.

Intended to store raw latitude/longitude strings for map positioning.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `latitude` | `string \| null` | `null` | Latitude coordinate string |
| `longitude` | `string \| null` | `null` | Longitude coordinate string |

**Functions**

#### ⚠️ `setLatitude(arg: string)` — Unused

Sets the latitude value.

- **Parameter:** `arg` — Latitude as a string.

#### ⚠️ `setLongitude(arg: string)` — Unused

Sets the longitude value.

- **Parameter:** `arg` — Longitude as a string.

> This store overlaps in purpose with [`useMapCoordinatesStore`](#2-usemapcoordinatesstore), which is actively used. Consider consolidating or removing `useLatLongStore`.

**Pages using this store:** None

---

### 11. `useStatusSelectionStore`

**File:** `src/store/useStatusSelectionStore.ts`

Manages the set of game statuses selected in the filter. Supports toggling individual statuses on/off. All four statuses are selected by default.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `selectedStatuses` | `string[]` | `['open', 'canceled', 'closed', 'completed']` | Array of currently active status filter values |

**Functions**

#### `toggleStatus(status: string)`

Adds or removes a status from the selected list.

- **Parameter:** `status` — A status key string: `"open"`, `"closed"`, `"canceled"`, or `"completed"`.
- If the status is already in `selectedStatuses`, it is removed. If not, it is added.
- **Used in:** `useFilterBoxSettings.tsx`

#### ⚠️ `resetStatuses()` — Unused

Resets `selectedStatuses` back to all four defaults.

- **Not called anywhere in the codebase.**

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 12. `useGameStatusStore`

**File:** `src/features/games/store/useGameStatusStore.ts`

Manages a 2D array of game status objects used to render the status selection grid in the Games sidebar and mobile filter. Each cell holds a status key, a Korean display tag, and a boolean `isSelected` flag.

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `gameStatusArray` | `GameStatus[][]` | See below | 2D array of status objects |

Default `gameStatusArray`:
```
Row 0: [{ status: "open",      tag: "모집 중",   isSelected: true },
        { status: "closed",    tag: "모집 마감", isSelected: true }]
Row 1: [{ status: "completed", tag: "경기 완료", isSelected: true }]
```

**Functions**

#### `toggleStatusSelection(rowIndex: number, cellIndex: number)`

Flips `isSelected` for the cell at the given row and column index.

- **Parameter:** `rowIndex` — Row index in `gameStatusArray` (0 or 1).
- **Parameter:** `cellIndex` — Column index within that row.
- **Used in:** `GameStatusContainer.tsx`, `MobileFilterModal.tsx`

#### `resetAllStatuses()`

Sets `isSelected: true` for all statuses except `"canceled"`, which is always reset to `false`.

- **Used in:** `Games.tsx`, `MobileFilterModal.tsx`, `CurrentFilterSettings.tsx`

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 13. `useDateStore`

**File:** `src/features/games/components/sidebar/store/useDateStore.ts`

Stores the selected year, month, and day for the Games sidebar date picker. All values are computed in Korea Standard Time (KST / Asia/Seoul).

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `selectedYear` | `number` | Current year (KST) | Four-digit year |
| `selectedMonth` | `number` | Current month (KST, 1–12) | Month number |
| `selectedDay` | `number` | Current day (KST, 1–31) | Day of the month |

**Functions**

#### `setDate(year: number, month: number, day: number)`

Sets all three date parts at once. Called when the user selects a date from the sidebar calendar.

- **Parameter:** `year` — Four-digit year.
- **Parameter:** `month` — Month number (1–12).
- **Parameter:** `day` — Day of the month (1–31).
- **Used in:** `useDatesLogic.ts`

#### `resetToToday()`

Resets all three fields to the current date in KST. Recalculates "today" at call time (not cached at store creation).

- **Used in:** `Games.tsx`, `MobileFilterModal.tsx`, `CurrentFilterSettings.tsx`

**Pages using this store:** Games (`src/pages/games/Games.tsx`)

---

### 14. `useProvinceStore`

**File:** `src/features/games/components/sidebar/store/useProvinceStore.ts`

> ⚠️ **This store is currently unused.** Its only reference in `useGamesPage.ts` is commented out.

Manages a list of Korean provinces/regions with individual selection state. All 17 regions start as selected.

**Default regions:** 서울, 경기, 인천, 부산, 대구, 광주, 대전, 울산, 세종, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주

**State**

| Field | Type | Default | Description |
|---|---|---|---|
| `provinces` | `{ province: string, isSelected: boolean }[]` | All 17 regions, all `isSelected: true` | Province list with selection state |

**Functions**

#### ⚠️ `toggleProvince(index: number)` — Unused

Toggles the `isSelected` flag for the province at the given array index.

- **Parameter:** `index` — Zero-based index into the `provinces` array.

#### ⚠️ `toggleProvinceByName(name: string)` — Unused

Toggles the `isSelected` flag for the province matching the given name.

- **Parameter:** `name` — Province name string, e.g. `"서울"`.

#### ⚠️ `resetAll(selected?: boolean)` — Unused

Sets all provinces to the given `isSelected` value.

- **Parameter:** `selected` — `true` to select all (default), `false` to deselect all.

#### ⚠️ `selectedProvinces()` — Unused

Returns an array of province name strings where `isSelected` is `true`.

- **Returns:** `string[]` — e.g. `["서울", "경기", "인천"]`
- This is a computed getter (uses `get()` internally), not a state-modifying action.

**Pages using this store:** None

---

## Unused Store Summary

The following stores and functions are defined but have no active callers in the current codebase.

### Entirely Unused Stores

| Store | File | Notes |
|---|---|---|
| `useCurrentLocationStore` | `src/store/useCurrentLocationStore.ts` | Never imported. Persists to localStorage. |
| `useLatLongStore` | `src/store/useLatLongStore.ts` | Commented out in `NaverMap.tsx`. Overlaps with `useMapCoordinatesStore`. |
| `useProvinceStore` | `src/features/games/components/sidebar/store/useProvinceStore.ts` | Commented out in `useGamesPage.ts`. |

### Unused Functions Within Active Stores

| Store | Function | Reason Not Called |
|---|---|---|
| `useTimeField` | `setDay(dayType)` | `dayType` state is never set after init |
| `useTimeField` | `setTime(hour, minutes)` | Individual `setHour`/`setMinutes` are used instead |
| `useCurrentMonthStore` | `resetCurrentMonth()` | Month is not reset on filter clear |
| `useDateSelectionStore` | `resetDateField()` | Reset handled by `resetFilterHeader()` in `useGameFilterStore` |
| `useGameFilterStore` | `resetSelectedDate()` | `resetFilterHeader()` resets everything at once |
| `useGameFilterStore` | `resetSelectedTimeDate()` | `resetFilterHeader()` resets everything at once |
| `useGameFilterStore` | `resetSelectedStatus()` | `resetFilterHeader()` resets everything at once |
| `useStatusSelectionStore` | `resetStatuses()` | Never called; status reset is not wired to any UI action |
| `useProvinceStore` | all functions | Entire store is unused |
