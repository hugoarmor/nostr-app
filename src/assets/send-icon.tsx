type Props = {
  color?: string
}

export default function SendIcon({ color }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_7)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.994 4.00666L3.59933 7.04199L6.39599 8.66066L8.86199 6.19399C8.98709 6.06898 9.15672 5.99879 9.33356 5.99885C9.51041 5.99892 9.67999 6.06923 9.80499 6.19432C9.93 6.31942 10.0002 6.48904 10.0001 6.66589C10.0001 6.84274 9.92975 7.01232 9.80466 7.13732L7.33799 9.60399L8.95799 12.4L11.994 4.00666ZM12.2093 2.51066C13.006 2.22199 13.778 2.99399 13.4893 3.79066L9.96799 13.5273C9.67866 14.326 8.58799 14.4233 8.16199 13.688L6.01733 9.98266L2.31199 7.83799C1.57666 7.41199 1.67399 6.32132 2.47266 6.03199L12.2093 2.51066Z"
          fill={color ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_7">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
