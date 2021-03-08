
export interface BankInterface {
  bankName: string;
  bankCode: string;
  bankLogo: string;
}

export class BankData {
  static banks: BankInterface[] = [
    {
      bankName: "Guaranty Trust Bank (GTB)",
      bankCode: "737",
      bankLogo: "https://pbs.twimg.com/profile_images/942788290687721474/RqUYFKPh.jpg",
    },
    {
      bankName: "First Bank",
      bankCode: "894",
      bankLogo: "https://upload.wikimedia.org/wikipedia/en/8/84/FirstBank_Logo.jpg.png",
    },
    {
      bankName: "United Bank for Africa",
      bankCode: "919",
      bankLogo: "https://i0.wp.com/www.intelregion.com/wp-content/uploads/2019/10/UBA-Essay-Competition.jpg",
    },
    {
      bankName: "Access (Diamond) Bank",
      bankCode: "901",
      bankLogo: "https://insiderpostonline.files.wordpress.com/2018/12/images-7.png?w=723",
    },
    {
      bankName: "Zenith Bank",
      bankCode: "966",
      bankLogo: "https://www.zenith-bank.co.uk/media/2077/zenith-bank-logo_2.png",
    },
    {
      bankName: "Wema Bank",
      bankCode: "945",
      bankLogo: "https://media-exp1.licdn.com/dms/image/C4E0BAQHZ3HHIJPl5XQ/company-logo_200_200/0/1550571233191?e=2159024400&v=beta&t=rLuJpUkCSvjvYK44V8zvQSx14g6tkznadNkU3b3W464",
    },
  ];
}
