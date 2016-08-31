SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": ".",
    "bundles": {
      "temp/dev-bundle.js": [
        "dev-bundle.config.js",
        "github:capaj/systemjs-hot-reloader@0.6.0/hot-reloader.js",
        "github:capaj/systemjs-hot-reloader@0.6.0.json",
        "npm:debug@2.2.0/browser.js",
        "npm:debug@2.2.0.json",
        "npm:debug@2.2.0/debug.js",
        "npm:ms@0.7.1/index.js",
        "npm:ms@0.7.1.json",
        "npm:weakee@1.0.0/weakee.js",
        "npm:weakee@1.0.0.json",
        "github:socketio/socket.io-client@1.4.8/socket.io.js",
        "github:socketio/socket.io-client@1.4.8.json",
        "github:systemjs/plugin-css@0.1.27/css.js",
        "github:systemjs/plugin-css@0.1.27.json",
        "github:frankwallis/plugin-typescript@5.0.19/plugin.js",
        "github:frankwallis/plugin-typescript@5.0.19.json",
        "github:frankwallis/plugin-typescript@5.0.19/utils.js",
        "npm:typescript@2.0.0/lib/typescript.js",
        "npm:typescript@2.0.0.json",
        "npm:crypto-browserify@3.11.0/index.js",
        "npm:crypto-browserify@3.11.0.json",
        "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
        "github:jspm/nodelibs-process@0.2.0-alpha.json",
        "npm:public-encrypt@4.0.0/browser.js",
        "npm:public-encrypt@4.0.0.json",
        "npm:public-encrypt@4.0.0/privateDecrypt.js",
        "github:jspm/nodelibs-buffer@0.2.0-alpha/global.js",
        "github:jspm/nodelibs-buffer@0.2.0-alpha.json",
        "npm:buffer@4.9.1/index.js",
        "npm:buffer@4.9.1.json",
        "npm:isarray@1.0.0/index.js",
        "npm:isarray@1.0.0.json",
        "npm:ieee754@1.1.6/index.js",
        "npm:ieee754@1.1.6.json",
        "npm:base64-js@1.1.2/lib/b64.js",
        "npm:base64-js@1.1.2.json",
        "npm:public-encrypt@4.0.0/withPublic.js",
        "npm:bn.js@4.11.6/lib/bn.js",
        "npm:bn.js@4.11.6.json",
        "npm:create-hash@1.1.2/browser.js",
        "npm:create-hash@1.1.2.json",
        "npm:cipher-base@1.0.2/index.js",
        "npm:cipher-base@1.0.2.json",
        "npm:string_decoder@0.10.31/index.js",
        "npm:string_decoder@0.10.31.json",
        "github:jspm/nodelibs-string_decoder@0.2.0-alpha.json",
        "npm:inherits@2.0.1/inherits_browser.js",
        "npm:inherits@2.0.1.json",
        "npm:stream-browserify@2.0.1/index.js",
        "npm:stream-browserify@2.0.1.json",
        "npm:readable-stream@2.1.5/passthrough.js",
        "npm:readable-stream@2.1.5.json",
        "npm:readable-stream@2.1.5/lib/_stream_passthrough.js",
        "npm:core-util-is@1.0.2/lib/util.js",
        "npm:core-util-is@1.0.2.json",
        "npm:readable-stream@2.1.5/lib/_stream_transform.js",
        "npm:readable-stream@2.1.5/lib/_stream_duplex.js",
        "npm:readable-stream@2.1.5/lib/_stream_writable.js",
        "npm:buffer-shims@1.0.0/index.js",
        "npm:buffer-shims@1.0.0.json",
        "github:jspm/nodelibs-events@0.2.0-alpha/events.js",
        "github:jspm/nodelibs-events@0.2.0-alpha.json",
        "npm:util-deprecate@1.0.2/browser.js",
        "npm:util-deprecate@1.0.2.json",
        "npm:process-nextick-args@1.0.7/index.js",
        "npm:process-nextick-args@1.0.7.json",
        "npm:readable-stream@2.1.5/lib/_stream_readable.js",
        "npm:readable-stream@2.1.5/lib/internal/streams/BufferList.js",
        "npm:readable-stream@2.1.5/transform.js",
        "npm:readable-stream@2.1.5/duplex.js",
        "npm:readable-stream@2.1.5/writable.js",
        "npm:readable-stream@2.1.5/readable.js",
        "github:jspm/nodelibs-stream@0.2.0-alpha.json",
        "npm:sha.js@2.4.5/index.js",
        "npm:sha.js@2.4.5.json",
        "npm:sha.js@2.4.5/sha512.js",
        "npm:sha.js@2.4.5/hash.js",
        "npm:sha.js@2.4.5/sha384.js",
        "npm:sha.js@2.4.5/sha256.js",
        "npm:sha.js@2.4.5/sha224.js",
        "npm:sha.js@2.4.5/sha1.js",
        "npm:sha.js@2.4.5/sha.js",
        "npm:ripemd160@1.0.1/lib/ripemd160.js",
        "npm:ripemd160@1.0.1.json",
        "npm:create-hash@1.1.2/md5.js",
        "npm:create-hash@1.1.2/helpers.js",
        "npm:browserify-rsa@4.0.1/index.js",
        "npm:browserify-rsa@4.0.1.json",
        "npm:randombytes@2.0.3/browser.js",
        "npm:randombytes@2.0.3.json",
        "npm:public-encrypt@4.0.0/xor.js",
        "npm:public-encrypt@4.0.0/mgf.js",
        "npm:parse-asn1@5.0.0/index.js",
        "npm:parse-asn1@5.0.0.json",
        "npm:pbkdf2@3.0.4/browser.js",
        "npm:pbkdf2@3.0.4.json",
        "npm:create-hmac@1.1.4/browser.js",
        "npm:create-hmac@1.1.4.json",
        "npm:browserify-aes@1.0.6/browser.js",
        "npm:browserify-aes@1.0.6.json",
        "npm:browserify-aes@1.0.6/modes.js",
        "npm:browserify-aes@1.0.6/decrypter.js",
        "npm:browserify-aes@1.0.6/modes/ctr.js",
        "npm:buffer-xor@1.0.3/index.js",
        "npm:buffer-xor@1.0.3.json",
        "npm:browserify-aes@1.0.6/modes/ofb.js",
        "npm:browserify-aes@1.0.6/modes/cfb1.js",
        "npm:browserify-aes@1.0.6/modes/cfb8.js",
        "npm:browserify-aes@1.0.6/modes/cfb.js",
        "npm:browserify-aes@1.0.6/modes/cbc.js",
        "npm:browserify-aes@1.0.6/modes/ecb.js",
        "npm:evp_bytestokey@1.0.0/index.js",
        "npm:evp_bytestokey@1.0.0.json",
        "npm:browserify-aes@1.0.6/authCipher.js",
        "npm:browserify-aes@1.0.6/ghash.js",
        "npm:browserify-aes@1.0.6/aes.js",
        "npm:browserify-aes@1.0.6/streamCipher.js",
        "npm:browserify-aes@1.0.6/encrypter.js",
        "npm:parse-asn1@5.0.0/fixProc.js",
        "npm:parse-asn1@5.0.0/aesid.json",
        "npm:parse-asn1@5.0.0/asn1.js",
        "npm:asn1.js@4.8.0/lib/asn1.js",
        "npm:asn1.js@4.8.0.json",
        "npm:asn1.js@4.8.0/lib/asn1/encoders/index.js",
        "npm:asn1.js@4.8.0/lib/asn1/encoders/pem.js",
        "npm:asn1.js@4.8.0/lib/asn1/encoders/der.js",
        "npm:asn1.js@4.8.0/lib/asn1/decoders/index.js",
        "npm:asn1.js@4.8.0/lib/asn1/decoders/pem.js",
        "npm:asn1.js@4.8.0/lib/asn1/decoders/der.js",
        "npm:asn1.js@4.8.0/lib/asn1/constants/index.js",
        "npm:asn1.js@4.8.0/lib/asn1/constants/der.js",
        "npm:asn1.js@4.8.0/lib/asn1/base/index.js",
        "npm:asn1.js@4.8.0/lib/asn1/base/node.js",
        "npm:minimalistic-assert@1.0.0/index.js",
        "npm:minimalistic-assert@1.0.0.json",
        "npm:asn1.js@4.8.0/lib/asn1/base/buffer.js",
        "npm:asn1.js@4.8.0/lib/asn1/base/reporter.js",
        "npm:asn1.js@4.8.0/lib/asn1/api.js",
        "github:jspm/nodelibs-vm@0.2.0-alpha/vm.js",
        "github:jspm/nodelibs-vm@0.2.0-alpha.json",
        "npm:public-encrypt@4.0.0/publicEncrypt.js",
        "npm:create-ecdh@4.0.0/browser.js",
        "npm:create-ecdh@4.0.0.json",
        "npm:elliptic@6.3.1/lib/elliptic.js",
        "npm:elliptic@6.3.1.json",
        "npm:elliptic@6.3.1/lib/elliptic/eddsa/index.js",
        "npm:elliptic@6.3.1/lib/elliptic/eddsa/signature.js",
        "npm:elliptic@6.3.1/lib/elliptic/eddsa/key.js",
        "npm:hash.js@1.0.3/lib/hash.js",
        "npm:hash.js@1.0.3.json",
        "npm:hash.js@1.0.3/lib/hash/hmac.js",
        "npm:hash.js@1.0.3/lib/hash/ripemd.js",
        "npm:hash.js@1.0.3/lib/hash/sha.js",
        "npm:hash.js@1.0.3/lib/hash/common.js",
        "npm:hash.js@1.0.3/lib/hash/utils.js",
        "npm:elliptic@6.3.1/lib/elliptic/ec/index.js",
        "npm:elliptic@6.3.1/lib/elliptic/ec/signature.js",
        "npm:elliptic@6.3.1/lib/elliptic/ec/key.js",
        "npm:elliptic@6.3.1/lib/elliptic/curves.js",
        "npm:elliptic@6.3.1/lib/elliptic/precomputed/secp256k1.js",
        "npm:elliptic@6.3.1/lib/elliptic/curve/index.js",
        "npm:elliptic@6.3.1/lib/elliptic/curve/edwards.js",
        "npm:elliptic@6.3.1/lib/elliptic/curve/mont.js",
        "npm:elliptic@6.3.1/lib/elliptic/curve/short.js",
        "npm:elliptic@6.3.1/lib/elliptic/curve/base.js",
        "npm:elliptic@6.3.1/lib/elliptic/hmac-drbg.js",
        "npm:brorand@1.0.5/index.js",
        "npm:brorand@1.0.5.json",
        "npm:elliptic@6.3.1/lib/elliptic/utils.js",
        "npm:elliptic@6.3.1/package.json",
        "npm:browserify-sign@4.0.0/browser.js",
        "npm:browserify-sign@4.0.0.json",
        "npm:browserify-sign@4.0.0/verify.js",
        "npm:browserify-sign@4.0.0/curves.js",
        "npm:browserify-sign@4.0.0/sign.js",
        "npm:browserify-sign@4.0.0/algos.js",
        "npm:diffie-hellman@5.0.2/browser.js",
        "npm:diffie-hellman@5.0.2.json",
        "npm:diffie-hellman@5.0.2/lib/dh.js",
        "npm:diffie-hellman@5.0.2/lib/generatePrime.js",
        "npm:miller-rabin@4.0.0/lib/mr.js",
        "npm:miller-rabin@4.0.0.json",
        "npm:diffie-hellman@5.0.2/lib/primes.json",
        "npm:browserify-cipher@1.0.0/browser.js",
        "npm:browserify-cipher@1.0.0.json",
        "npm:browserify-des@1.0.0/modes.js",
        "npm:browserify-des@1.0.0.json",
        "npm:browserify-des@1.0.0/index.js",
        "npm:des.js@1.0.0/lib/des.js",
        "npm:des.js@1.0.0.json",
        "npm:des.js@1.0.0/lib/des/ede.js",
        "npm:des.js@1.0.0/lib/des/cbc.js",
        "npm:des.js@1.0.0/lib/des/des.js",
        "npm:des.js@1.0.0/lib/des/cipher.js",
        "npm:des.js@1.0.0/lib/des/utils.js",
        "github:jspm/nodelibs-crypto@0.2.0-alpha.json",
        "npm:os-browserify@0.2.1/browser.js",
        "npm:os-browserify@0.2.1.json",
        "github:jspm/nodelibs-os@0.2.0-alpha.json",
        "github:frankwallis/plugin-typescript@5.0.19/format-errors.js",
        "github:frankwallis/plugin-typescript@5.0.19/factory.js",
        "github:frankwallis/plugin-typescript@5.0.19/type-checker.js",
        "github:frankwallis/plugin-typescript@5.0.19/compiler-host.js",
        "github:frankwallis/plugin-typescript@5.0.19/logger.js",
        "github:frankwallis/plugin-typescript@5.0.19/resolver.js",
        "github:frankwallis/plugin-typescript@5.0.19/transpiler.js",
        "npm:react-dom@15.3.1/index.js",
        "npm:react-dom@15.3.1.json",
        "npm:react@15.3.1/lib/ReactDOM.js",
        "npm:react@15.3.1.json",
        "npm:react@15.3.1/lib/ReactDOMNullInputValuePropHook.js",
        "npm:fbjs@0.8.4/lib/warning.js",
        "npm:fbjs@0.8.4.json",
        "npm:fbjs@0.8.4/lib/emptyFunction.js",
        "npm:react@15.3.1/lib/ReactComponentTreeHook.js",
        "npm:fbjs@0.8.4/lib/invariant.js",
        "npm:react@15.3.1/lib/ReactCurrentOwner.js",
        "npm:react@15.3.1/lib/reactProdInvariant.js",
        "npm:react@15.3.1/lib/ReactDOMUnknownPropertyHook.js",
        "npm:react@15.3.1/lib/EventPluginRegistry.js",
        "npm:react@15.3.1/lib/DOMProperty.js",
        "npm:react@15.3.1/lib/ReactInstrumentation.js",
        "npm:react@15.3.1/lib/ReactDebugTool.js",
        "npm:fbjs@0.8.4/lib/performanceNow.js",
        "npm:fbjs@0.8.4/lib/performance.js",
        "npm:fbjs@0.8.4/lib/ExecutionEnvironment.js",
        "npm:react@15.3.1/lib/ReactChildrenMutationWarningHook.js",
        "npm:react@15.3.1/lib/ReactHostOperationHistoryHook.js",
        "npm:react@15.3.1/lib/ReactInvalidSetStateWarningHook.js",
        "npm:react@15.3.1/lib/renderSubtreeIntoContainer.js",
        "npm:react@15.3.1/lib/ReactMount.js",
        "npm:react@15.3.1/lib/shouldUpdateReactComponent.js",
        "npm:react@15.3.1/lib/setInnerHTML.js",
        "npm:react@15.3.1/lib/createMicrosoftUnsafeLocalFunction.js",
        "npm:react@15.3.1/lib/DOMNamespaces.js",
        "npm:react@15.3.1/lib/instantiateReactComponent.js",
        "npm:react@15.3.1/lib/ReactHostComponent.js",
        "npm:object-assign@4.1.0/index.js",
        "npm:object-assign@4.1.0.json",
        "npm:react@15.3.1/lib/ReactEmptyComponent.js",
        "npm:react@15.3.1/lib/ReactCompositeComponent.js",
        "npm:fbjs@0.8.4/lib/shallowEqual.js",
        "npm:fbjs@0.8.4/lib/emptyObject.js",
        "npm:react@15.3.1/lib/checkReactTypeSpec.js",
        "npm:react@15.3.1/lib/ReactPropTypesSecret.js",
        "npm:react@15.3.1/lib/ReactPropTypeLocationNames.js",
        "npm:react@15.3.1/lib/ReactReconciler.js",
        "npm:react@15.3.1/lib/ReactRef.js",
        "npm:react@15.3.1/lib/ReactOwner.js",
        "npm:react@15.3.1/lib/ReactPropTypeLocations.js",
        "npm:fbjs@0.8.4/lib/keyMirror.js",
        "npm:react@15.3.1/lib/ReactNodeTypes.js",
        "npm:react@15.3.1/lib/ReactElement.js",
        "npm:react@15.3.1/lib/canDefineProperty.js",
        "npm:react@15.3.1/lib/ReactInstanceMap.js",
        "npm:react@15.3.1/lib/ReactErrorUtils.js",
        "npm:react@15.3.1/lib/ReactComponentEnvironment.js",
        "npm:react@15.3.1/lib/ReactUpdates.js",
        "npm:react@15.3.1/lib/Transaction.js",
        "npm:react@15.3.1/lib/ReactFeatureFlags.js",
        "npm:react@15.3.1/lib/PooledClass.js",
        "npm:react@15.3.1/lib/CallbackQueue.js",
        "npm:react@15.3.1/lib/ReactUpdateQueue.js",
        "npm:react@15.3.1/lib/ReactMarkupChecksum.js",
        "npm:react@15.3.1/lib/adler32.js",
        "npm:react@15.3.1/lib/ReactDOMFeatureFlags.js",
        "npm:react@15.3.1/lib/ReactDOMContainerInfo.js",
        "npm:react@15.3.1/lib/validateDOMNesting.js",
        "npm:react@15.3.1/lib/ReactDOMComponentTree.js",
        "npm:react@15.3.1/lib/ReactDOMComponentFlags.js",
        "npm:react@15.3.1/lib/ReactBrowserEventEmitter.js",
        "npm:react@15.3.1/lib/isEventSupported.js",
        "npm:react@15.3.1/lib/getVendorPrefixedEventName.js",
        "npm:react@15.3.1/lib/ViewportMetrics.js",
        "npm:react@15.3.1/lib/ReactEventEmitterMixin.js",
        "npm:react@15.3.1/lib/EventPluginHub.js",
        "npm:react@15.3.1/lib/forEachAccumulated.js",
        "npm:react@15.3.1/lib/accumulateInto.js",
        "npm:react@15.3.1/lib/EventPluginUtils.js",
        "npm:react@15.3.1/lib/EventConstants.js",
        "npm:react@15.3.1/lib/DOMLazyTree.js",
        "npm:react@15.3.1/lib/setTextContent.js",
        "npm:react@15.3.1/lib/escapeTextContentForBrowser.js",
        "npm:react@15.3.1/lib/getHostComponentFromComposite.js",
        "npm:react@15.3.1/lib/findDOMNode.js",
        "npm:react@15.3.1/lib/ReactVersion.js",
        "npm:react@15.3.1/lib/ReactDefaultInjection.js",
        "npm:react@15.3.1/lib/SimpleEventPlugin.js",
        "npm:fbjs@0.8.4/lib/keyOf.js",
        "npm:react@15.3.1/lib/getEventCharCode.js",
        "npm:react@15.3.1/lib/SyntheticWheelEvent.js",
        "npm:react@15.3.1/lib/SyntheticMouseEvent.js",
        "npm:react@15.3.1/lib/getEventModifierState.js",
        "npm:react@15.3.1/lib/SyntheticUIEvent.js",
        "npm:react@15.3.1/lib/getEventTarget.js",
        "npm:react@15.3.1/lib/SyntheticEvent.js",
        "npm:react@15.3.1/lib/SyntheticTransitionEvent.js",
        "npm:react@15.3.1/lib/SyntheticTouchEvent.js",
        "npm:react@15.3.1/lib/SyntheticDragEvent.js",
        "npm:react@15.3.1/lib/SyntheticKeyboardEvent.js",
        "npm:react@15.3.1/lib/getEventKey.js",
        "npm:react@15.3.1/lib/SyntheticFocusEvent.js",
        "npm:react@15.3.1/lib/SyntheticClipboardEvent.js",
        "npm:react@15.3.1/lib/SyntheticAnimationEvent.js",
        "npm:react@15.3.1/lib/EventPropagators.js",
        "npm:fbjs@0.8.4/lib/EventListener.js",
        "npm:react@15.3.1/lib/SelectEventPlugin.js",
        "npm:react@15.3.1/lib/isTextInputElement.js",
        "npm:fbjs@0.8.4/lib/getActiveElement.js",
        "npm:react@15.3.1/lib/ReactInputSelection.js",
        "npm:fbjs@0.8.4/lib/focusNode.js",
        "npm:fbjs@0.8.4/lib/containsNode.js",
        "npm:fbjs@0.8.4/lib/isTextNode.js",
        "npm:fbjs@0.8.4/lib/isNode.js",
        "npm:react@15.3.1/lib/ReactDOMSelection.js",
        "npm:react@15.3.1/lib/getTextContentAccessor.js",
        "npm:react@15.3.1/lib/getNodeForCharacterOffset.js",
        "npm:react@15.3.1/lib/SVGDOMPropertyConfig.js",
        "npm:react@15.3.1/lib/ReactReconcileTransaction.js",
        "npm:react@15.3.1/lib/ReactInjection.js",
        "npm:react@15.3.1/lib/ReactClass.js",
        "npm:react@15.3.1/lib/ReactNoopUpdateQueue.js",
        "npm:react@15.3.1/lib/ReactComponent.js",
        "npm:react@15.3.1/lib/ReactEventListener.js",
        "npm:fbjs@0.8.4/lib/getUnboundedScrollPosition.js",
        "npm:react@15.3.1/lib/ReactDefaultBatchingStrategy.js",
        "npm:react@15.3.1/lib/ReactDOMTextComponent.js",
        "npm:react@15.3.1/lib/DOMChildrenOperations.js",
        "npm:react@15.3.1/lib/ReactMultiChildUpdateTypes.js",
        "npm:react@15.3.1/lib/Danger.js",
        "npm:fbjs@0.8.4/lib/createNodesFromMarkup.js",
        "npm:fbjs@0.8.4/lib/getMarkupWrap.js",
        "npm:fbjs@0.8.4/lib/createArrayFromMixed.js",
        "npm:react@15.3.1/lib/ReactDOMTreeTraversal.js",
        "npm:react@15.3.1/lib/ReactDOMEmptyComponent.js",
        "npm:react@15.3.1/lib/ReactDOMComponent.js",
        "npm:react@15.3.1/lib/ReactServerRenderingTransaction.js",
        "npm:react@15.3.1/lib/ReactServerUpdateQueue.js",
        "npm:react@15.3.1/lib/ReactMultiChild.js",
        "npm:react@15.3.1/lib/flattenChildren.js",
        "npm:react@15.3.1/lib/traverseAllChildren.js",
        "npm:react@15.3.1/lib/KeyEscapeUtils.js",
        "npm:react@15.3.1/lib/getIteratorFn.js",
        "npm:react@15.3.1/lib/ReactChildReconciler.js",
        "npm:react@15.3.1/lib/ReactDOMTextarea.js",
        "npm:react@15.3.1/lib/LinkedValueUtils.js",
        "npm:react@15.3.1/lib/ReactPropTypes.js",
        "npm:react@15.3.1/lib/DisabledInputUtils.js",
        "npm:react@15.3.1/lib/ReactDOMSelect.js",
        "npm:react@15.3.1/lib/ReactDOMOption.js",
        "npm:react@15.3.1/lib/ReactChildren.js",
        "npm:react@15.3.1/lib/ReactDOMInput.js",
        "npm:react@15.3.1/lib/DOMPropertyOperations.js",
        "npm:react@15.3.1/lib/quoteAttributeValueForBrowser.js",
        "npm:react@15.3.1/lib/ReactDOMButton.js",
        "npm:react@15.3.1/lib/CSSPropertyOperations.js",
        "npm:fbjs@0.8.4/lib/memoizeStringOnly.js",
        "npm:fbjs@0.8.4/lib/hyphenateStyleName.js",
        "npm:fbjs@0.8.4/lib/hyphenate.js",
        "npm:react@15.3.1/lib/dangerousStyleValue.js",
        "npm:react@15.3.1/lib/CSSProperty.js",
        "npm:fbjs@0.8.4/lib/camelizeStyleName.js",
        "npm:fbjs@0.8.4/lib/camelize.js",
        "npm:react@15.3.1/lib/AutoFocusUtils.js",
        "npm:react@15.3.1/lib/ReactComponentBrowserEnvironment.js",
        "npm:react@15.3.1/lib/ReactDOMIDOperations.js",
        "npm:react@15.3.1/lib/HTMLDOMPropertyConfig.js",
        "npm:react@15.3.1/lib/EnterLeaveEventPlugin.js",
        "npm:react@15.3.1/lib/DefaultEventPluginOrder.js",
        "npm:react@15.3.1/lib/ChangeEventPlugin.js",
        "npm:react@15.3.1/lib/BeforeInputEventPlugin.js",
        "npm:react@15.3.1/lib/SyntheticInputEvent.js",
        "npm:react@15.3.1/lib/SyntheticCompositionEvent.js",
        "npm:react@15.3.1/lib/FallbackCompositionState.js",
        "npm:react@15.3.1/react.js",
        "npm:react@15.3.1/lib/React.js",
        "npm:react@15.3.1/lib/ReactElementValidator.js",
        "npm:react@15.3.1/lib/onlyChild.js",
        "npm:react@15.3.1/lib/ReactDOMFactories.js",
        "npm:react@15.3.1/lib/ReactPureComponent.js"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@5.0.19",
      "css": "github:systemjs/plugin-css@0.1.27",
      "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
      "blue-tape": "npm:blue-tape@0.2.0"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@5.0.19": {
        "map": {
          "typescript": "npm:typescript@2.0.2"
        }
      },
      "github:capaj/systemjs-hot-reloader@0.6.0": {
        "map": {
          "weakee": "npm:weakee@1.0.0",
          "debug": "npm:debug@2.2.0",
          "socket.io-client": "github:socketio/socket.io-client@1.4.8"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:blue-tape@0.2.0": {
        "map": {
          "tape": "npm:tape@4.6.0"
        }
      },
      "npm:tape@4.6.0": {
        "map": {
          "deep-equal": "npm:deep-equal@1.0.1",
          "through": "npm:through@2.3.8",
          "string.prototype.trim": "npm:string.prototype.trim@1.1.2",
          "resolve": "npm:resolve@1.1.7",
          "defined": "npm:defined@1.0.0",
          "inherits": "npm:inherits@2.0.1",
          "resumer": "npm:resumer@0.0.0",
          "function-bind": "npm:function-bind@1.1.0",
          "minimist": "npm:minimist@1.2.0",
          "object-inspect": "npm:object-inspect@1.2.1",
          "glob": "npm:glob@7.0.6",
          "has": "npm:has@1.0.1"
        }
      },
      "npm:resumer@0.0.0": {
        "map": {
          "through": "npm:through@2.3.8"
        }
      },
      "npm:string.prototype.trim@1.1.2": {
        "map": {
          "function-bind": "npm:function-bind@1.1.0",
          "es-abstract": "npm:es-abstract@1.6.1",
          "define-properties": "npm:define-properties@1.1.2"
        }
      },
      "npm:glob@7.0.6": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "once": "npm:once@1.3.3",
          "fs.realpath": "npm:fs.realpath@1.0.0",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "minimatch": "npm:minimatch@3.0.3",
          "inflight": "npm:inflight@1.0.5"
        }
      },
      "npm:es-abstract@1.6.1": {
        "map": {
          "function-bind": "npm:function-bind@1.1.0",
          "es-to-primitive": "npm:es-to-primitive@1.1.1",
          "is-callable": "npm:is-callable@1.1.3",
          "is-regex": "npm:is-regex@1.0.3"
        }
      },
      "npm:has@1.0.1": {
        "map": {
          "function-bind": "npm:function-bind@1.1.0"
        }
      },
      "npm:es-to-primitive@1.1.1": {
        "map": {
          "is-callable": "npm:is-callable@1.1.3",
          "is-date-object": "npm:is-date-object@1.0.1",
          "is-symbol": "npm:is-symbol@1.0.1"
        }
      },
      "npm:define-properties@1.1.2": {
        "map": {
          "object-keys": "npm:object-keys@1.0.11",
          "foreach": "npm:foreach@2.0.5"
        }
      },
      "npm:inflight@1.0.5": {
        "map": {
          "once": "npm:once@1.3.3",
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:once@1.3.3": {
        "map": {
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:minimatch@3.0.3": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.6"
        }
      },
      "npm:brace-expansion@1.1.6": {
        "map": {
          "balanced-match": "npm:balanced-match@0.4.2",
          "concat-map": "npm:concat-map@0.0.1"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "module": "system",
    "target": "es5",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "moduleResolution": "node",
    "preserveConstEnums": true,
    "removeComments": true,
    "typeCheck": false,
    "tsconfig": false
  },
  packages: {
    "app": {
      "main": "app.tsx",
      "defaultExtension": "tsx",
      "format": "esm",
      "meta": {
        "*.tsx": {
          "loader": "plugin-typescript"
        },
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "classnames": "npm:classnames@2.2.5",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.3.1",
    "react-dom": "npm:react-dom@15.3.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "inherits": "npm:inherits@2.0.1",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "cipher-base": "npm:cipher-base@1.0.2"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.2"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.1",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6",
        "base64-js": "npm:base64-js@1.1.2"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.1"
      }
    },
    "npm:stream-http@2.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:react@15.3.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "loose-envify": "npm:loose-envify@1.2.0",
        "fbjs": "npm:fbjs@0.8.4"
      }
    },
    "npm:fbjs@0.8.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "immutable": "npm:immutable@3.8.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.0",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:node-fetch@1.6.0": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    }
  }
});