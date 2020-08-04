import React from 'react';

type TaskResult = [string, any];
export type Task = () => Promise<TaskResult | null>;

export interface ApplicationLoaderProps {
  tasks?: Task[];
  initialConfig?: Record<string, any>;
  placeholder?: (props: { loading: boolean }) => React.ReactElement;
  children: (config: any) => React.ReactElement;
}

export const LoadFontsTask = (fonts: { [key: string]: number }): Promise<TaskResult> => {
  const message: string = [
    'There is no need to use this task in Bare RN Project.',
    'Use `react-native.config.js',
    'Documentation: https://github.com/react-native-community/cli/blob/master/docs/configuration.md',
  ].join('\n');

  console.warn(message);

  return Promise.resolve(null);
};


export const AppLoading = (props: ApplicationLoaderProps): React.ReactElement => {

  const [loading, setLoading] = React.useState<boolean>(true);
  const loadingResult = props.initialConfig || {};

  const onTasksFinish = (): void => {
    setLoading(false);
  };

  React.useEffect(() => {
    if (loading) {
      startTasks().then(onTasksFinish);
    }
  }, [loading]);

  const saveTaskResult = (result: [string, any] | null): void => {
    if (result) {
      loadingResult[result[0]] = result[1];
    }
  };

  const createRunnableTask = (task: Task): Promise<void> => {
    return task().then(saveTaskResult);
  };

  const startTasks = async (): Promise<any> => {
    if (props.tasks) {
      return Promise.all(props.tasks.map(createRunnableTask));
    }
    return Promise.resolve();
  };

  return (
    <React.Fragment>
      {!loading && props.children(loadingResult)}
      {props.placeholder && props.placeholder({ loading })}
    </React.Fragment>
  );
};
