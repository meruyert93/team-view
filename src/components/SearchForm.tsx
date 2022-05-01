import React from 'react'
import { FormControl } from 'react-bootstrap';

type IProps = {
  style: object,
  children: React.ReactNode;
  className: string,
  'aria-labelledby': string,
}

export type Ref = HTMLDivElement

const SearchForm = React.forwardRef<Ref, IProps>(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = React.useState<string>('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="input"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list">
          {React.Children.toArray(children).filter(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (child: any) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  },
);
SearchForm.displayName = "SearchForm"

export default SearchForm