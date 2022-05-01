import React from 'react'
import { FormControl } from 'react-bootstrap';

type IProps = {
  style: object,
  children: React.ReactNode;
  className: string,
  'aria-labelledby': string,
  inputValue: string,
  onChange: React.ChangeEventHandler<typeof FormControl>,
}

export type Ref = HTMLDivElement

const SearchForm = React.forwardRef<Ref, IProps>(
  ({ children, style, className, 'aria-labelledby': labeledBy, inputValue, onChange }, ref) => {

    const filteredList = React.Children.toArray(children).filter(
      (child: any) => child.props.children.toLowerCase().startsWith(inputValue)
    )

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
          onChange={(e) => {
            e.preventDefault()
            onChange(e)
          }}
          value={inputValue}
        /> 
          {
            filteredList.length 
            ? (
              <ul className="list">
                {filteredList}
              </ul>
            )
            : (
              <div className="emptyList">
                <span className='notFoundInfo'>Team member not found</span>
                <span className='notInTheTeamInfo'>Maybe she/he is not yet in your team?</span>
              </div>
            )
          }
      </div>
    );
  },
);
SearchForm.displayName = "SearchForm"

export default SearchForm