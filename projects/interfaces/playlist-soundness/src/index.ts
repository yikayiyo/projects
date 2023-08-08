// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run iexport t.
export interface Song {
	type: "song";
	name: string;
	length: number;
	artist: string | string[];
}

export interface Album {
	type: "album";
	songs: Song[];
}

export interface Playlist {
	type: "playlist";
	resolve: () => Song[];
}

export interface Artists {
	[name: string]: string[];
}

export type Item = Song | Album | Playlist;

export interface UnrollPlayList {
	artists: Artists;
	songs: string[];
	time: number;
}
export function unrollPlaylist(items: Item[]): UnrollPlayList {
	const artists: Artists = {};
	const songs: string[] = [];
	let time = 0;

	function addSong(song: Song) {
		const songArtists =
			typeof song.artist === "string" ? [song.artist] : song.artist;

		for (const artist of songArtists) {
			artists[artist] ??= [];
			artists[artist].push(song.name);
		}

		time += song.length;
		songs.push(song.name);
	}

	for (let item of items) {
		switch (item.type) {
			case "song":
				addSong(item);
				break;

			case "album":
				item.songs.forEach(addSong);
				break;

			case "playlist":
				item.resolve().forEach(addSong);
				break;
		}
	}
	return { artists, songs, time };
}
