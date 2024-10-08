package dev.jeremymichael.Stats360.service;

import dev.jeremymichael.Stats360.model.PUBG.GameModeStats;
import dev.jeremymichael.Stats360.model.PUBG.MultiPlayer;
import dev.jeremymichael.Stats360.model.PUBG.Player;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class PUBGService extends GameService {
    public PUBGService() {
        API_URL = "https://api.pubg.com/shards/";
        AUTH_TOKEN = "";
    }

    public GameModeStats lifeTimeStats(String username, String service) {
        String url = API_URL + service + "/players?filter[playerNames]=" + username;
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.set("Authorization", AUTH_TOKEN);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<MultiPlayer> id = exchange(
                url,
                HttpMethod.GET,
                entity,
                new ParameterizedTypeReference<MultiPlayer>() {}
        );

        url = API_URL + service + "/players/" + id.getBody().getId() + "/seasons/lifetime";
        ResponseEntity<Player> response = exchange(
                url,
                HttpMethod.GET,
                entity,
                new ParameterizedTypeReference<Player>() {}
        );

        return response.getBody().getData().getAttributes().getGameModeStats();
    }
}
