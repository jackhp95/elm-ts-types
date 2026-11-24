port module Float exposing (main)


port incoming : (Float -> msg) -> Sub msg


port outgoing : Float -> Cmd msg


main : Program Float Float Float
main =
    Platform.worker
        { init = \f -> ( f, Cmd.none )
        , update = \_ f -> ( f, outgoing f )
        , subscriptions = \_ -> incoming identity
        }
