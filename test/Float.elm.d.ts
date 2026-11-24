// Generated file! Manual edits will be lost.
declare namespace Elm {
    namespace Float {
        export function init(args: {
            flags: number
        }): {
            ports: {
                incoming: {
                    send: (value: number) => void
                },
                outgoing: {
                    subscribe: (f: (value: number) => Promise<void>) => void,
                    unsubscribe: (f: (value: number) => Promise<void>) => void
                }
            }
        };
    }
}