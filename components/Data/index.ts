interface howItWorksCardProps {
  id: string;
  title: string;
  content: string | number;
}

interface expectedPointDataProp {
  id: string;
  icon?: string | any;
  title: string;
  amount: string;
  minValue: string;
  maxValue: string;
}

interface pointsDetailsProps {
  id: string;
  icon: string;
  points: string;
  pointsDetail: string;
}

export const howItWorksCard: howItWorksCardProps[] = [
  {
    id: "1",
    title: "You Earn Points",
    content:
      "To earn points, interact with our protocol on testnet, send tweets that mention us as described above during the wave. This lets you stack up points.",
  },
  {
    id: "2",
    title: "Points Calculated",
    content:
      "We tally all your mentions and consistently update your points by reevaluating your engagement.",
  },
  {
    id: "3",
    title: "Tokens Calculated",
    content:
      "We calculate your share of the wave's token allotment based on your points and account status. This determines how many tokens you'll earn.",
  },
  {
    id: "4",
    title: "You receive tokens",
    content:
      "In the next wave, claim your share of the previous wave's tokens from the dashboard.",
  },
];

export const expectedPointData: expectedPointDataProp[] = [
  {
    id: "0",
    icon: "/newImages/landingPage/progressiveBar.svg",
    title: "Transfers",
    amount: "65,000",
    minValue: "0",
    maxValue: "50",
  },
  {
    id: "1",
    icon: "/newImages/landingPage/HeartIcon.svg",
    title: "Borrows",
    amount: "2,000",
    minValue: "0",
    maxValue: "50",
  },
  {
    id: "2",
    icon: "/newImages/landingPage/CommentIcon.svg",
    title: "Deposits",
    amount: "2,000",
    minValue: "0",
    maxValue: "50",
  },
  {
    id: "3",
    icon: "/newImages/landingPage/tweetIcon.svg",
    title: "Tweets",
    amount: "2,000",
    minValue: "0",
    maxValue: "100",
  },
  {
    id: "4",
    icon: "/newImages/landingPage/tweetIcon.svg",
    title: "Retweet",
    amount: "2,000",
    minValue: "0",
    maxValue: "50",
  },
  {
    id: "5",
    icon: "/newImages/landingPage/redeemIcon.svg",
    title: "Redeem collateral",
    amount: "2,000",
    minValue: "0",
    maxValue: "50",
  },
];
export const pointsDetails: pointsDetailsProps[] = [
  {
    id: "1",
    icon: "/newImages/landingPage/progressiveBar.svg",
    points: "2x",
    pointsDetail: "2 points per transfer",
  },
  {
    id: "1",
    icon: "/newImages/landingPage/heartIcon.svg",
    points: "2x",
    pointsDetail: "500 points per borrow",
  },
  {
    id: "2",
    icon: "/newImages/landingPage/CommentIcon.svg",
    points: "2x",
    pointsDetail: "250 points per deposit",
  },
  {
    id: "3",
    icon: "/newImages/landingPage/tweetIcon.svg",
    points: "2x",
    pointsDetail: "1000 points per tweet",
  },
  {
    id: "4",
    icon: "/newImages/landingPage/tweetIcon.svg",
    points: "2x",
    pointsDetail: "500 points per quote tweet",
  },
  {
    id: "5",
    icon: "/newImages/landingPage/redeemIcon.svg",
    points: "2x",
    pointsDetail: "500 points per redeem colateral",
  },
];
