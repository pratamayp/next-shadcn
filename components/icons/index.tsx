import { SVGProps } from 'react';

export type IconSVGProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const ChevronUpDown = ({
  size = 24,
  height,
  width,
  ...props
}: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='none'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 3C10.2652 3.00006 10.5195 3.10545 10.707 3.293L13.707 6.293C13.8892 6.4816 13.99 6.7342 13.9877 6.9964C13.9854 7.2586 13.8803 7.50941 13.6948 7.69482C13.5094 7.88023 13.2586 7.9854 12.9964 7.98767C12.7342 7.98995 12.4816 7.88916 12.293 7.707L10 5.414L7.70703 7.707C7.51843 7.88916 7.26583 7.98995 7.00363 7.98767C6.74143 7.9854 6.49062 7.88023 6.30521 7.69482C6.1198 7.50941 6.01463 7.2586 6.01236 6.9964C6.01008 6.7342 6.11087 6.4816 6.29303 6.293L9.29303 3.293C9.48052 3.10545 9.73484 3.00006 10 3ZM6.29303 12.293C6.48056 12.1055 6.73487 12.0002 7.00003 12.0002C7.26519 12.0002 7.5195 12.1055 7.70703 12.293L10 14.586L12.293 12.293C12.4816 12.1108 12.7342 12.01 12.9964 12.0123C13.2586 12.0146 13.5094 12.1198 13.6948 12.3052C13.8803 12.4906 13.9854 12.7414 13.9877 13.0036C13.99 13.2658 13.8892 13.5184 13.707 13.707L10.707 16.707C10.5195 16.8945 10.2652 16.9998 10 16.9998C9.73487 16.9998 9.48056 16.8945 9.29303 16.707L6.29303 13.707C6.10556 13.5195 6.00024 13.2652 6.00024 13C6.00024 12.7348 6.10556 12.4805 6.29303 12.293Z'
      fill='#757575'
    />
  </svg>
);
export const ChevronLeft = ({
  size = 24,
  height,
  width,
  ...props
}: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <g clipPath='url(#clip0_877_8673)'>
      <path
        d='M11.828 12L14.657 14.828L13.243 16.243L9 12L13.243 7.757L14.657 9.172L11.828 12Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_877_8673'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
export const ChevronRight = ({
  size = 24,
  height,
  width,
  ...props
}: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <g clipPath='url(#clip0_877_8678)'>
      <path
        d='M12.172 12L9.34302 9.172L10.757 7.757L15 12L10.757 16.243L9.34302 14.828L12.172 12Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_877_8678'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
export const ChevronDown = ({
  size = 24,
  height,
  width,
  ...props
}: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 6 4'
    fill='none'
  >
    <path
      d='M3.00008 4.00042L0.171631 1.17202L1.11444 0.229187L3.00008 2.11482L4.88568 0.229187L5.82848 1.17202L3.00008 4.00042Z'
      fill='white'
    />
  </svg>
);

export const Arrow = ({ size = 24, height, width, ...props }: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M9.41421 8L18.0208 16.6066L16.6066 18.0208L8 9.41421V17H6V6H17V8H9.41421Z'
      fill='#2B3643'
    />
  </svg>
);

export const TriangleDown = ({
  size = 24,
  height,
  width,
  ...props
}: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 17 18'
    fill='none'
  >
    <path
      d='M12.6926 6.29395H8.27965H4.30588C3.62588 6.29395 3.28588 7.11561 3.76754 7.59729L7.43673 11.2665C8.02465 11.8544 8.9809 11.8544 9.56882 11.2665L10.9642 9.87104L13.238 7.59729C13.7126 7.11561 13.3726 6.29395 12.6926 6.29395Z'
      fill='white'
    />
  </svg>
);
export const Helpdesk = ({
  size = 24,
  height,
  width,
  ...props
}: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14V16H13V14H11ZM8.56731 8.81346L10.5288 9.20577C10.6656 8.51823 11.2723 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5C13.5 10.3284 12.8284 11 12 11H11V13H12C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.302 6 8.88637 7.20919 8.56731 8.81346Z'
      fill='white'
    />
  </svg>
);
export const Apps = ({ size = 24, height, width, ...props }: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M7 11.5C4.51472 11.5 2.5 9.48528 2.5 7C2.5 4.51472 4.51472 2.5 7 2.5C9.48528 2.5 11.5 4.51472 11.5 7C11.5 9.48528 9.48528 11.5 7 11.5ZM7 21.5C4.51472 21.5 2.5 19.4853 2.5 17C2.5 14.5147 4.51472 12.5 7 12.5C9.48528 12.5 11.5 14.5147 11.5 17C11.5 19.4853 9.48528 21.5 7 21.5ZM17 11.5C14.5147 11.5 12.5 9.48528 12.5 7C12.5 4.51472 14.5147 2.5 17 2.5C19.4853 2.5 21.5 4.51472 21.5 7C21.5 9.48528 19.4853 11.5 17 11.5ZM17 21.5C14.5147 21.5 12.5 19.4853 12.5 17C12.5 14.5147 14.5147 12.5 17 12.5C19.4853 12.5 21.5 14.5147 21.5 17C21.5 19.4853 19.4853 21.5 17 21.5Z'
      fill='white'
    />
  </svg>
);

export const Search = ({
  size = 24,
  height,
  width,
  ...props
}: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z'
      fill='#757575'
    />
  </svg>
);
export const Filter = ({
  size = 24,
  height,
  width,
  ...props
}: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z'
      fill='#2d3748'
    />
  </svg>
);
export const Eye = ({ size = 24, height, width, ...props }: IconSVGProps) => (
  <svg
    {...props}
    height={height ?? size}
    width={width ?? size}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z'
      fill='#777777'
    />
  </svg>
);
export const Pencil = ({
  size = 24,
  height,
  width,
  ...props
}: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M15.7279 9.57628L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57628ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33364L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6473L16.435 3.21232C16.8256 2.8218 17.4587 2.8218 17.8492 3.21232L20.6777 6.04075C21.0682 6.43127 21.0682 7.06444 20.6777 7.45496L7.24264 20.89Z'
      fill='#777777'
    />
  </svg>
);
export const Clear = ({ size = 24, height, width, ...props }: IconSVGProps) => (
  <svg
    {...props}
    height={size || height}
    width={size || width}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
  >
    <circle cx='12' cy='12' r='12' fill='white' />
    <path
      d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z'
      fill='#777777'
    />
  </svg>
);
