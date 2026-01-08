type TagProps = {
  label: string
  icon?: React.ElementType
}

export const Tags = ({ label, icon: Icon }: TagProps) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#5c3eac] bg-transparent">
      {Icon && <Icon size={14} className="text-[#c7b8ff]" />}
      <span className="text-xs text-white font-urbanist">{label}</span>
    </div>
  )
}
