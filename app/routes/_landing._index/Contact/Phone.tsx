export function Phone() {
  return (
    <div className="flex gap-4 justify-center">
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-gray-200 shrink-0 hidden md:block"
      >
        <path d="M16.556 12.906L16.101 13.359C16.101 13.359 15.018 14.435 12.063 11.497C9.108 8.55901 10.191 7.48301 10.191 7.48301L10.477 7.19701C11.184 6.49501 11.251 5.36701 10.634 4.54301L9.374 2.86001C8.61 1.84001 7.135 1.70501 6.26 2.57501L4.69 4.13501C4.257 4.56701 3.967 5.12501 4.002 5.74501C4.092 7.33201 4.81 10.745 8.814 14.727C13.061 18.949 17.046 19.117 18.675 18.965C19.191 18.917 19.639 18.655 20 18.295L21.42 16.883C22.38 15.93 22.11 14.295 20.882 13.628L18.972 12.589C18.166 12.152 17.186 12.28 16.556 12.906Z" />
      </svg>

      <a
        href="tel:+528180236577"
        target="_blank"
        rel="noreferrer"
        className="text-gray-200 font-semibold text-2xl hover:underline text-center"
      >
        +52 8180236577
      </a>
    </div>
  );
}
