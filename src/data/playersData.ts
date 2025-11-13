export interface Player {
  name: string;
  points: number;
  totalGames: number;
  losses: number;
}

export const PLAYERS_KEY = "players";

const defaultPlayers: Player[] = [
  { name: "Yoo Joonghyuk", points: 1200, totalGames: 87, losses: 15 },
  { name: "Kim Dokja", points: 1100, totalGames: 75, losses: 20 },
  { name: "Han Sooyoung", points: 950, totalGames: 60, losses: 10 },
  { name: "Lee Hyunsung", points: 900, totalGames: 55, losses: 12 },
  { name: "Park Minho", points: 850, totalGames: 50, losses: 15 },
  { name: "Choi Jiho", points: 800, totalGames: 45, losses: 18 },
  { name: "Seo Yeji", points: 780, totalGames: 40, losses: 8 },
  { name: "Jang Sungkyu", points: 750, totalGames: 35, losses: 12 },
];

export function getPlayers(): Player[] {
  const stored = localStorage.getItem(PLAYERS_KEY);
  return stored ? JSON.parse(stored) : [...defaultPlayers];
}

export function savePlayers(players: Player[]) {
  localStorage.setItem(PLAYERS_KEY, JSON.stringify(players));
}

export function addPlayer(player: Player) {
  const players = getPlayers();
  const index = players.findIndex((p) => p.name === player.name);
  if (index >= 0) {
    players[index] = player;
  } else {
    players.push(player);
  }
  players.sort((a, b) => b.points - a.points);
  savePlayers(players);
}

export function removePlayer(name: string) {
  const players = getPlayers();
  const index = players.findIndex((p) => p.name === name);
  if (index !== -1) {
    players.splice(index, 1);
  }
  savePlayers(players);
}
