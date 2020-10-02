import React from "react";
import classes from "./TeamPage.module.scss";

import { ISwapHeading } from "../../App";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { TeamPageItem } from "./TeamPageItem/TeamPageItem";

export const TeamPage = ({
  SWAP_HEADING,
  windowWidth,
}: ISwapHeading): React.ReactElement => {
  const data: Array<{
    id: number;
    imgUrl: string;
    name: string;
    position: string;
    descr: string;
    interests?: string;
  }> = [
    {
      id: 1,
      imgUrl: "img/teamImg/image-min.png",
      name: "Л. В. Кулик",
      position: "Генеральный директор, д-р физ.-мат. наук, профессор РАН",
      descr:
        "Проф. Л.В.Кулик имеет многолетний опыт работы в области спектроскопии комбинационного рассеяния света и управления научными проектами. Награжден премией Гумбольдта в 2000 году, а в 2007 году премией Президента РФ для молодых докторов наук. Проф. Кулик является автором более 70 научных публикаций.",
      interests:
        "спектроскопия комбинационного рассеяния коллективных электронных возбуждений в низкоразмерных полупроводниковых гетероструктурах.",
    },
    {
      id: 2,
      imgUrl: "img/teamImg/image-1-min.png",
      name: "И. В. Кукушкин",
      position:
        "Технологический директор, академик РАН, профессор МГУ и Московского физико-технического института (МФТИ)",
      descr:
        "Награжден Российской государственной премией в области физики, премиями имени Макса Планка и Гумбольдта в 2001 году. Академик И.В. Кукушкин является автором более 200 научных публикаций и 4 патентов.      ",
      interests:
        "магнитооптика полупроводников, композитные фермионы, рамановская спектроскопия электронных возбуждений в полупроводниках.",
    },
    {
      id: 3,
      imgUrl: "img/teamImg/image-2-min.png",
      name: "Вадим Кирпичёв",
      position: "к. физ.-мат. наук",
      descr:
        "Автор более 40 научных публикаций, исследователь в области рамановской спектроскопии кристаллов, обладатель более, чем 20-летнего опыта работы со спектроскопическим и лазерным оборудованием.",
    },
    {
      id: 4,
      imgUrl: "img/teamImg/image-3-min.png",
      name: "Андрей Журавлёв",
      position: "к. физ.-мат. наук",
      descr:
        "Исследователь в области рамановской спектроскопии твердотельных объектов, применений SERS-технологии, автор 20 научных публикаций.",
    },
    {
      id: 5,
      imgUrl: "img/teamImg/image-4-min.png",
      name: "Александр Ваньков",
      position: "к. физ.-мат. наук",
      descr:
        "Исследователь в области рамановской спектроскопии твердотельных и органических веществ, применений SERS-технологии, автор более 20 научных публикаций.",
    },
  ];

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes["team-section"]}>
        <div className={classes.heading}>
          <h1>Команда</h1>
          <p>
            Команда Спектр-М была сформирована при помощи{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              бизнес-инкубатора InQubit
            </a>{" "}
            и ведущих ученых{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              Института физики твердого тела
            </a>{" "}
            (ИФТТ){" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              Российской Академии Наук
            </a>{" "}
            (РАН) в 1998 году.
          </p>
          <p>
            Основу команды составляют ученые в области спектроскопии
            комбинационного рассеяния из{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              Лаборатории неравновесных электронных процессов
            </a>{" "}
            ИФТТ и InQubit менеджеров по развитию бизнеса.
          </p>
        </div>
        <div className={classes.team}>
          {data.map((item) => (
            <TeamPageItem key={item.id} data={item} />
          ))}
        </div>
      </section>
      <section className={classes.jurist}>
        <div className={classes.jurist__item}>
          <p>
            Юридическое сопровождение компании осуществляется компанией{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              GREENBERG, WHITCOMBE & TAKEUCHI, LLP
            </a>
          </p>
        </div>
        <div className={classes.jurist__item}>
          <p>
            Защита интеллектуальной собственности осуществляется{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              Greenberg Traurig LLP
            </a>
            , одной из крупнейших юридических компаний США
          </p>
        </div>
      </section>
    </main>
  );
};
