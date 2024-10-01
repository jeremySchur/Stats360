package dev.jeremymichael.Stats360.model.Dota;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Hero {
    private Integer hero_id;
    private Integer last_played;
    private Integer games;
    private Integer win;
    private Integer with_games;
    private Integer with_win;
    private Integer against_games;
    private Integer against_win;
}
