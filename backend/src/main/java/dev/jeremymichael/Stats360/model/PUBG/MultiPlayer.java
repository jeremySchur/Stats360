package dev.jeremymichael.Stats360.model.PUBG;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@lombok.Data
public class MultiPlayer {
    private List<Data> data;
    private Links links;
    private Meta meta;

    public String getId(){
        return data.get(0).getId();
    }
}
