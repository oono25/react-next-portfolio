
import React from 'react';



type ButtonLinkProps = {

  href: string;

  children: React.ReactNode;

};



export default function ButtonLink({ href, children }: ButtonLinkProps) {

  return (

    <a href={href} className="button-link">

      {children}

    </a>

  );

}

