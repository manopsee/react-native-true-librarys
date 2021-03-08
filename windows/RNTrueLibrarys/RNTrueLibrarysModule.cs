using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace True.Librarys.RNTrueLibrarys
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNTrueLibrarysModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNTrueLibrarysModule"/>.
        /// </summary>
        internal RNTrueLibrarysModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNTrueLibrarys";
            }
        }
    }
}
