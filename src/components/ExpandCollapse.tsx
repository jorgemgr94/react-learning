import { useState } from 'react';

interface ExpandCollapseProps {
  excerpt: React.ReactNode;
  children: React.ReactNode;
}

export default function ExpandCollapse ({
  excerpt,
  children
}: ExpandCollapseProps) {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <h3>
        {excerpt}
        <button
          aria-expanded={isExpanded ? 'true' : 'false'}
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </h3>
      <div>{isExpanded && children}</div>
    </>
  );
}
