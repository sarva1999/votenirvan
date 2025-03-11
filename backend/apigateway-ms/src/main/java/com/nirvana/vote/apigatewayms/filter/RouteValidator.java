package com.nirvana.vote.apigatewayms.filter;

import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.function.Predicate;

@Component
public class RouteValidator {



    public static final Map<String, List<HttpMethod>> securedEndpoints = new HashMap<>();

    static {
        securedEndpoints.put("/election", Collections.singletonList(HttpMethod.POST));
        securedEndpoints.put("/voter/all", Collections.singletonList(HttpMethod.GET));
        securedEndpoints.put("/result", Collections.singletonList(HttpMethod.POST));
        securedEndpoints.put("/candidate", Collections.singletonList(HttpMethod.POST));
    }

    public Predicate<ServerHttpRequest> isSecured =
            request -> {
                String path = request.getURI().getPath();

                List<HttpMethod> allowedMethods = securedEndpoints.get(path);
                if (allowedMethods != null) {
                    HttpMethod requestMethod = request.getMethod();
                    return allowedMethods.contains(requestMethod);
                }
                return false;
            };

}
