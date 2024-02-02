import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="keywords" content="искусство, библиотека, театр, поиск, журналы" />
        <meta name="description" content="РГБИ - поиск журналов, перемешеные в Можайск" />
        <meta name="DC.Title" lang="ru" content="Российская государственная библиотека искусств" />
        <meta name="DC.Creator" content="FoxTail25 & LuckyIAM" />
        <meta name="DC.Subject" lang="ru" content="Москва; Россия; журналы; библиотека; каталог; периодика; рукописи; живопись; литература; искусство" />
        <meta name="DC.Description" lang="ru" content="Информационные ресурсы библиотеки: электронные книги, рукописи, онлайн-каталог" />
        <meta name="DC.Publisher" content="LuckyIAM" />
        <meta name="DC.Contributor" content="LuckyIAM" />
        <meta name="DC.Date.Issued" content="2022-11-09" />
        <meta name="DC.Type" content="Web page" />
        <meta name="DC.Format" content="text/html" />
        <meta name="DC.Identifier" content="localhost" />
        {/* <meta name="DC.Source" content="Источник данных"/> */}
        <meta name="DC.Language" content="ru" />
        <meta name="DC.Coverage" content="Москва" />
        <meta name="DC.Rights" content="(c) РГБИ Москва 1996-2024" />
        <link rel='icon' href='/logoru.svg'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}