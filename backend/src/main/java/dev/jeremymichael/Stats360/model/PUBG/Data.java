package dev.jeremymichael.Stats360.model.PUBG;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@lombok.Data
public class Data {
    private String id;
    private String type;
    private Attributes attributes;
    private Relationships relationships;
    private Links links;

}
