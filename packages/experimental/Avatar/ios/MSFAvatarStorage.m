#import <Foundation/Foundation.h>
#import "MSFAvatarStorage.h"

NS_ASSUME_NONNULL_BEGIN

@implementation MSFAvatar (MSFAvatarViewManagerAdditons)

static NSMutableDictionary *s_sharedInstance;

+(NSMutableDictionary *)storage
{
    if (s_sharedInstance == nil) {
        static dispatch_once_t onceToken;
        dispatch_once(&onceToken, ^{
            s_sharedInstance = [NSMutableDictionary new];
        });
    }
    return s_sharedInstance;
}

@end

NS_ASSUME_NONNULL_END
