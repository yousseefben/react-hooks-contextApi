import React from 'react';

export default function EpisodesList(props) {
    const {episodes = []} = props;


    return (
        <section>
            {episodes.map(episode => {
                return (
                    <section key={episode.id} data-testid='hello'>
                        <img
                            src={episode.image && episode.image.medium}
                            alt={`Rick and Morty ${episode.name}`}
                        />
                        <div>{episode.name}</div>
                        <section style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                Season: {episode.season} Number: {episode.number}
                            </div>
                        </section>
                    </section>
                )
            })}
        </section>
    );
}
