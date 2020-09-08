import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path
        d="M23.176 3.626a6.335 6.335 0 00-4.817-2.17c-2.634 0-4.302 1.574-5.237 2.894a9.59 9.59 0 00-.622 1.009 9.574 9.574 0 00-.622-1.01C10.943 3.03 9.275 1.458 6.64 1.458c-1.873 0-3.584.77-4.817 2.17C.648 4.96 0 6.748 0 8.66c0 2.08.812 4.015 2.556 6.088 1.558 1.854 3.8 3.765 6.397 5.977.967.824 1.968 1.677 3.033 2.609l.032.028a.73.73 0 00.964 0l.032-.028a298.795 298.795 0 013.034-2.61c2.596-2.211 4.838-4.122 6.396-5.976C24.188 12.675 25 10.74 25 8.66c0-1.911-.648-3.699-1.824-5.034zM15.097 19.61c-.834.71-1.692 1.442-2.597 2.229a340.33 340.33 0 00-2.597-2.23C4.822 15.28 1.465 12.42 1.465 8.66c0-1.554.518-2.997 1.458-4.064a4.89 4.89 0 013.718-1.673c2.008 0 3.306 1.237 4.041 2.275.66.93 1.004 1.869 1.122 2.23a.732.732 0 001.392 0 8.686 8.686 0 011.122-2.23c.735-1.038 2.033-2.275 4.041-2.275 1.447 0 2.767.594 3.718 1.673.94 1.067 1.458 2.51 1.458 4.065 0 3.76-3.357 6.62-8.438 10.95z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
