interface SidebarProps {
  handleResetSidebarSettings: () => void;
}

export default function ResetStatusField({
  handleResetSidebarSettings,
}: SidebarProps) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-white">필터</p>
      <button
        type="button"
        onClick={handleResetSidebarSettings}
        className="text-xs text-[#999]"
      >
        초기화
      </button>
    </div>
  );
}
