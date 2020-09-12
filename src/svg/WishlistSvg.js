import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <Path
        d="M14.678 27.656H6.24a2.346 2.346 0 01-2.344-2.343V4.686A2.346 2.346 0 016.24 2.344h14.408a2.346 2.346 0 012.344 2.343v11.075a1.172 1.172 0 102.343 0V4.687A4.693 4.693 0 0020.648 0H6.24a4.693 4.693 0 00-4.687 4.687v20.625A4.693 4.693 0 006.24 30h8.438a1.172 1.172 0 100-2.344z"
        fill="#fff"
      />
      <Path
        d="M19.482 9.902H12.1a1.172 1.172 0 100 2.344h7.382a1.172 1.172 0 000-2.344zM12.1 19.277a1.172 1.172 0 000 2.344h1.759a1.172 1.172 0 100-2.344h-1.76zM19.482 5.215H12.1a1.172 1.172 0 100 2.344h7.382a1.172 1.172 0 100-2.344zM20.654 15.762c0-.648-.524-1.172-1.172-1.172H12.1a1.172 1.172 0 000 2.344h7.382c.648 0 1.172-.525 1.172-1.172zM7.53 16.934a1.172 1.172 0 100-2.344 1.172 1.172 0 000 2.344zM27.371 20.342c-.678-.687-1.606-1.065-2.615-1.065-1.003 0-1.87.32-2.519.915-.649-.596-1.515-.915-2.518-.915-1.009 0-1.937.378-2.616 1.065-.693.702-1.075 1.69-1.075 2.78 0 2.3 1.952 3.755 3.521 4.925.714.532 1.388 1.034 1.776 1.516a1.172 1.172 0 001.825 0c.388-.482 1.062-.984 1.776-1.516 1.569-1.17 3.521-2.626 3.521-4.925 0-1.09-.382-2.078-1.076-2.78zm-3.846 5.826c-.436.325-.88.656-1.288 1.006-.407-.35-.85-.681-1.287-1.006-1.268-.946-2.579-1.923-2.579-3.046 0-.926.516-1.5 1.347-1.5.694 0 .964.285 1.107.5.189.284.237.6.245.652a1.17 1.17 0 002.335 0c.007-.052.056-.368.245-.653.143-.214.413-.5 1.106-.5.831 0 1.348.575 1.348 1.501 0 1.123-1.311 2.1-2.58 3.046zM7.53 7.559a1.172 1.172 0 100-2.344 1.172 1.172 0 000 2.344zM7.53 12.246a1.172 1.172 0 100-2.344 1.172 1.172 0 000 2.344zM7.53 21.621a1.172 1.172 0 100-2.344 1.172 1.172 0 000 2.344z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
