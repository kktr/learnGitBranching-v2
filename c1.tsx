import React from 'react';

type Props = {};

function LetterC({}: Props) {
  const [value, setValue] = useState(null);

  const submit = (data: any): void => {
    setValue(data);
  };

  return (
    <div>
      <div>
        <button type="submit" onClick={submit}>
          Submit
        </button>

        <ul>
          <li></li>
        </ul>
      </div>
      LetterC
    </div>
  );
}
