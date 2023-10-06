const EnvironmentMenus = () => {
  const envs = [
    {
      name: 'Development',
      variables: [
        {
          name: 'API_URL',
          value: 'http://localhost:3000',
        },
      ],
    },
    {
      name: 'Production',
      variables: [
        {
          name: 'API_URL',
          value: 'http://localhost:3000',
        },
      ],
    },
  ];
  return (
    <div>
      {envs.map((env,index) => {
        return (
          <div key={index}>
            <div>{env.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EnvironmentMenus;
