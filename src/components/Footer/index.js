import React from 'react';

function Footer() {
  return (
    <div className="w-full text-center relative mt-14">
      <p className="ms-auto text-xs text-gray-500 dark:text-gray-400 sticky bottom-0 left-0 right-0">
        Remember, contributions to this topic should follow our{' '}
        <a
          href="/#"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Community Guidelines
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;
