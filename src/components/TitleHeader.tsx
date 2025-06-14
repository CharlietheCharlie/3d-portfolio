import React from "react";

const TitleHeader = ({
  title,
  sub,
}: {
  title: string;
  sub: string;
}): React.ReactElement => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
