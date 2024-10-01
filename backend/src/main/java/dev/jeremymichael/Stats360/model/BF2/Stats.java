package dev.jeremymichael.Stats360.model.BF2;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Stats {
    @JsonProperty("Rank")
    private String rank;
    @JsonProperty("SPM")
    private Integer SPM;
    @JsonProperty("KPM")
    private Double KPM;
    @JsonProperty("Win")
    private String win;
    @JsonProperty("Best Class")
    private String best_class;
    @JsonProperty("Accuracy")
    private String accuracy;
    @JsonProperty("Time played")
    private String time_played;
    @JsonProperty("K/D")
    private Double kd;
    @JsonProperty("Kills")
    private Integer kills;
    @JsonProperty("Deaths")
    private Integer deaths;
    @JsonProperty("Wins")
    private Integer wins;
    @JsonProperty("Loses")
    private Integer loses;
}
