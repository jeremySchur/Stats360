package dev.jeremymichael.Stats360.model.PUBG;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@lombok.Data
public class Player {
    private Data data;
    private Links links;
    private Meta meta;
}
