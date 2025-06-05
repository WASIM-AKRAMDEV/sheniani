import Image from "next/image"

export const renderFeatureValue = (value: boolean | string | null | undefined) => {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Image src="/icons/check.svg" alt="check" width={16} height={14} />
      </div>
    )
  }

  if (value === false) {
    return <div className="text-center text-gray-200">—</div>
  }

  if (typeof value === "string") {
    return <div className="text-center text-sm font-semibold text-para">{value}</div>
  }

  return <div className="text-center text-gray-200">—</div>
}
