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

type PropsC1 = {
  abc: string[];
};

function c1({ abc }: PropsC1): void {
  const displayName = (abc) => {
    return abc.map((aa: any) => {
      return <LetterC />;
    });
  };

  return <DisplayName displayName={displayName} />;
}

export default c1;

function DisplayName({ displayName }) {
  return <div>{displayName}</div>;
}
