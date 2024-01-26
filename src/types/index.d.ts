import Image from 'next/image'


export type TCommonProps = {
    title?: string;
    name?: string;
    icon?:Image;
  };
  
  export type TExperience = {
    companyName: string;
    date: string;
    points: string[];
  } & Required<Omit<TCommonProps, "name">>;

  export type TProject = {
    link : string;

  }& Required<TCommonProps>;

  export type TTechnology = Required<Omit<TCommonProps, "title">>;
