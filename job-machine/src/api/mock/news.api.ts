const avatar1 =
  "https://videos.pexels.com/video-files/15921892/15921892-uhd_3840_2160_50fps.mp4";
const avatar2 =
  "https://videos.pexels.com/video-files/15921892/15921892-uhd_3840_2160_50fps.mp4";
const avatar3 =
  "https://videos.pexels.com/video-files/15921892/15921892-uhd_3840_2160_50fps.mp4";
const avatar4 =
  "https://videos.pexels.com/video-files/15921892/15921892-uhd_3840_2160_50fps.mp4";

export interface Post {
  key: string;
  id?: string;
  avatarUrl: string;
  author: string;
  title: string;
  date: number;
  text: string;
  img: string;
}

export const getNews = (): Promise<Post[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          avatarUrl: avatar1,
          author: "Dr. Dan Reed",
          title: "Lorem ipsum dolor sit amet",
          date: 1576789200000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus mauris ac mi efficitur, eu venenatis metus mattis. Aenean sit amet imperdiet dui. Sed vel lacinia tellus, vel ornare leo. Duis massa turpis, bibendum nec consectetur non, imperdiet vitae est. Aenean vestibulum non dui in vehicula. Fusce ex velit, iaculis in urna sit amet, congue fringilla orci. Phasellus vitae augue justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tincidunt lobortis est sit amet porta.",
<<<<<<< HEAD
          img: "https://videos.pexels.com/video-files/15921892/15921892-uhd_3840_2160_50fps.mp4",
          key: '1'
=======
          img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          key: "1",
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
        },
        {
          avatarUrl: avatar2,
          author: "Jordan Howard",
          title: "Morbi convallis",
          date: 1575925200000,
          text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed sodales erat. Fusce lobortis, dolor vel porttitor porttitor, ipsum lorem pulvinar nunc, ac vestibulum est risus vel turpis. Vestibulum et vestibulum est, vitae placerat lectus. Maecenas arcu sem, congue id metus non, ultricies egestas purus. Integer ut sagittis eros, in posuere arcu. Integer malesuada sapien libero, iaculis hendrerit enim egestas sit amet. In sed sapien in lorem pulvinar sollicitudin. In hendrerit magna felis, vitae fringilla magna imperdiet sed. Nam urna est, feugiat vitae odio tincidunt, lobortis auctor eros. Sed dapibus, nunc eu posuere porta, lectus tellus ornare velit, eu congue orci diam ac lorem. Integer lorem purus, dictum et aliquet finibus, consequat ac metus. Mauris tempor mattis mattis. Ut a porttitor urna. Nullam congue imperdiet tincidunt.",
<<<<<<< HEAD
          img: "https://videos.pexels.com/video-files/15921892/15921892-uhd_3840_2160_50fps.mp4",
          key: '2'
=======
          img: "https://image.tienphong.vn/w890/Uploaded/2024/pcgycivo/2014_12_16/1_ZGYM.jpg",
          key: "2",
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
        },
        {
          avatarUrl: avatar3,
          author: "Jack Hannah",
          title: "Sed sed sodales erat",
          date: 1575147600000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper ipsum luctus bibendum tempus. Curabitur lacinia justo vitae egestas aliquet. Morbi convallis congue felis, eu pulvinar nulla finibus in. Praesent imperdiet velit nibh, consectetur varius ipsum mattis non. Maecenas dictum, nunc at vestibulum pulvinar, velit ipsum sodales ex, id vehicula felis velit ut quam. Curabitur vulputate commodo sapien ac facilisis. Praesent erat eros, porta ut faucibus eget, rhoncus quis nisi. Suspendisse potenti. Sed rhoncus, ex eu condimentum finibus, lacus ex bibendum orci, sit amet volutpat lacus lacus sit amet lorem. Donec laoreet eros at mollis tincidunt. Maecenas lectus velit, efficitur non dictum sed, fringilla ut lacus. In at placerat lorem, quis elementum dui. Cras urna nisi, luctus ut urna id, placerat eleifend tellus. Donec tempor purus est, non dictum nibh suscipit non.",
<<<<<<< HEAD
          img: "https://videos.pexels.com/video-files/15921892/15921892-uhd_3840_2160_50fps.mp4",
          key: '3'
=======
          img: "https://www.shutterstock.com/image-illustration/illustration-hand-gesture-when-someone-260nw-2233249213.jpg",
          key: "3",
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
        },
        {
          avatarUrl: avatar4,
          title: "Integer a nisl nisl",
          author: "Colin Falls",
          date: 1572555600000,
          text: "Integer a nisl nisl. Cras lobortis, velit vitae vulputate mollis, sem est gravida nisl, in dapibus tellus lacus quis elit. Sed non tellus facilisis, lobortis purus a, auctor lorem. Donec maximus volutpat odio, ut vulputate mi porta eget. Donec ac interdum massa, non maximus ipsum. Etiam porttitor a turpis nec ultricies. Etiam porttitor dui non leo lobortis aliquet.",
<<<<<<< HEAD
          img: "https://videos.pexels.com/video-files/15921892/15921892-uhd_3840_2160_50fps.mp4",
          key: '4'
=======
          img: "https://images.pexels.com/photos/1442297/pexels-photo-1442297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          key: "4",
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
        },
      ]);
    }, 1000);
  });
};
<<<<<<< HEAD
=======

export const responseData = [
  {
    avatarUrl: avatar1,
    author: "Dr. Dan Reed",
    title: "Lorem ipsum dolor sit amet",
    date: 1576789200000,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus mauris ac mi efficitur, eu venenatis metus mattis. Aenean sit amet imperdiet dui. Sed vel lacinia tellus, vel ornare leo. Duis massa turpis, bibendum nec consectetur non, imperdiet vitae est. Aenean vestibulum non dui in vehicula. Fusce ex velit, iaculis in urna sit amet, congue fringilla orci. Phasellus vitae augue justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tincidunt lobortis est sit amet porta.",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    key: "1",
    status: "",
  },
  {
    avatarUrl: avatar2,
    author: "Jordan Howard",
    title: "Morbi convallis",
    date: 1575925200000,
    text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed sodales erat. Fusce lobortis, dolor vel porttitor porttitor, ipsum lorem pulvinar nunc, ac vestibulum est risus vel turpis. Vestibulum et vestibulum est, vitae placerat lectus. Maecenas arcu sem, congue id metus non, ultricies egestas purus. Integer ut sagittis eros, in posuere arcu. Integer malesuada sapien libero, iaculis hendrerit enim egestas sit amet. In sed sapien in lorem pulvinar sollicitudin. In hendrerit magna felis, vitae fringilla magna imperdiet sed. Nam urna est, feugiat vitae odio tincidunt, lobortis auctor eros. Sed dapibus, nunc eu posuere porta, lectus tellus ornare velit, eu congue orci diam ac lorem. Integer lorem purus, dictum et aliquet finibus, consequat ac metus. Mauris tempor mattis mattis. Ut a porttitor urna. Nullam congue imperdiet tincidunt.",
    img: "https://image.tienphong.vn/w890/Uploaded/2024/pcgycivo/2014_12_16/1_ZGYM.jpg",
    key: "2",
    status: "",
  },
  {
    avatarUrl: avatar3,
    author: "Jack Hannah",
    title: "Sed sed sodales erat",
    date: 1575147600000,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper ipsum luctus bibendum tempus. Curabitur lacinia justo vitae egestas aliquet. Morbi convallis congue felis, eu pulvinar nulla finibus in. Praesent imperdiet velit nibh, consectetur varius ipsum mattis non. Maecenas dictum, nunc at vestibulum pulvinar, velit ipsum sodales ex, id vehicula felis velit ut quam. Curabitur vulputate commodo sapien ac facilisis. Praesent erat eros, porta ut faucibus eget, rhoncus quis nisi. Suspendisse potenti. Sed rhoncus, ex eu condimentum finibus, lacus ex bibendum orci, sit amet volutpat lacus lacus sit amet lorem. Donec laoreet eros at mollis tincidunt. Maecenas lectus velit, efficitur non dictum sed, fringilla ut lacus. In at placerat lorem, quis elementum dui. Cras urna nisi, luctus ut urna id, placerat eleifend tellus. Donec tempor purus est, non dictum nibh suscipit non.",
    img: "https://www.shutterstock.com/image-illustration/illustration-hand-gesture-when-someone-260nw-2233249213.jpg",
    key: "3",
    status: "",
  },
  {
    avatarUrl: avatar4,
    title: "Integer a nisl nisl",
    author: "Colin Falls",
    date: 1572555600000,
    text: "Integer a nisl nisl. Cras lobortis, velit vitae vulputate mollis, sem est gravida nisl, in dapibus tellus lacus quis elit. Sed non tellus facilisis, lobortis purus a, auctor lorem. Donec maximus volutpat odio, ut vulputate mi porta eget. Donec ac interdum massa, non maximus ipsum. Etiam porttitor a turpis nec ultricies. Etiam porttitor dui non leo lobortis aliquet.",
    img: "https://images.pexels.com/photos/1442297/pexels-photo-1442297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    key: "4",
    status: "",
  },
];
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
